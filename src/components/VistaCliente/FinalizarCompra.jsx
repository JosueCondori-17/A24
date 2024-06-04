import { Dropdown } from 'primereact/dropdown';
import React, { useContext, useRef, useState } from 'react'
import { ClienteContext } from '../../context/ClienteContext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import iconBCP from '../../icons/bcp.jpg';
import iconBBVA from '../../icons/bbva.jfif';
import iconInterBank from '../../icons/interbank.png';
import iconScotiabank from '../../icons/scotiabank.jfif';
import iconWhatsapp from '../../icons/whatsap.jfif';
import iconYape from '../../icons/yape.jpg';
import iconPlin from '../../icons/plin.jpg';
import axios from 'axios';
import { useEffect } from 'react';
import { Toast } from 'primereact/toast';

const FinalizarCompra = () => {
  const { carrito, totalCarrito, dataUbicacion } = useContext(ClienteContext);

  const toast = useRef(null);
  const showToast = (type, title, detail) => {
    toast.current.show({
      severity: type,
      summary: title,
      detail: detail,
      life: 3000,
    });
  };

  //DATOS PARA ENVIAR PEDIDO
  const [documento, setDocumento] = useState(null);
  const [num_documento, setNum_documento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [distrito, setDistrito] = useState("");
  const [direccion, setDireccion] = useState("");
  const [referencia, setReferencia] = useState("");
  const [info, setInfo] = useState("");
  const [listaPro, setListaPro] = useState("");
  const [pago, setPago] = useState("Deposito");
  const [estadoPed, setEstadoPed] = useState("Pedido");


  useEffect(() => {
    if (carrito) {
      const nuevaListaPro = carrito.map((item) => {
        return `${item.nombre} cantidad: ${item.cantidad} subtotal: ${item.subtotal} \n`;
      }).join('');
      setListaPro(nuevaListaPro + `Total: ${totalCarrito}`);
    }
  }, [carrito]);

  const cambiarNumDocumento = (e) => {
    let value = parseInt(e.target.value);
    if (Number.isInteger(value)) {
      setNum_documento(value);
    }
    else {
      setNum_documento("");
    }
  }
  const cambiarTelefono = (e) => {
    let value = parseInt(e.target.value);
    if (Number.isInteger(value)) {
      setTelefono(value);
    }
    else {
      setTelefono("");
    }
  }


  //VALIDACIÓN DE RUC Y DNI
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNvbmRvcmlodWF5dW5nYWpvc3VlY2FsZWRAZ21haWwuY29tIn0.B0T7dbMjdvAZTdfmKa9vTjwCgYWRnVSnDqg56faRNqo";

  const getDNI = async () => {
    const response = await axios.get(`https://dniruc.apisperu.com/api/v1/dni/${num_documento}?token=${token}`);
    console.log("DNI DEL CLIENTE: ", response.data);
    setNombre(response.data.nombres);
    setApellidos(response.data.apellidoPaterno + " " + response.data.apellidoMaterno);
    showToast(
      "success",
      "DNI válido",
      `DNI ingresado correctamente`
    );
  }
  const getRUC = async () => {
    const response = await axios.get(`https://dniruc.apisperu.com/api/v1/ruc/${num_documento}?token=${token}`);
    console.log("RUC DEL CLIENTE: ", response.data);
    showToast(
      "success",
      "RUC válido",
      `RUC ingresado correctamente`
    );
  }

const crearPedido = async()=>{

  const fechaActual = new Date();
  const dia = String(fechaActual.getDate()).padStart(2, '0');
  const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
  const año = fechaActual.getFullYear();
  const fechaFormateada = `${dia}/${mes}/${año}`;

  const data =
  {
    "fecha": fechaFormateada,
    "nombre_cli": nombre,
    "apellido_cli": apellidos,
    "dni_cli": num_documento,
    "telefono_cli": telefono,
    "correo_cli": correo,
    "departamento_cli": departamento,
    "distrito_cli": distrito,
    "direccion_cli": direccion,
    "referencia_cli": referencia,
    "mensaje_cli": info,
    "producto": listaPro,
    "estado_pedido": "Sin entregar"
  }
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/pedidos', data);
    console.log('Pedido realizado:', response.data);
    showToast(
      "success",
      "Pedido Realizado",
      `Se hizo el pedido correctamente`
    );
  } catch (error) {
    console.error('Error al crear categoría:', error);
  }
}
  
  return (
    <>
      <Toast className='toast-correct' ref={toast} />
      <div className='container-compra'>
        <div className='compra-box'>
          <div className='seccion-form'>
            <div className='titulo-form'>DETALLES DE FACTURACIÓN</div>
            <div className='content-form'>
              <div>
                <p >Tipo de Documento</p>
                <select required className='tip_document' name="tipo_documento" id="document-select" onChange={(e) => setDocumento(e.target.value)}>
                  <option className='option-document' value="" >Selecciona tipo de documento</option>
                  <option className='option-document' value="DNI" >DNI</option>
                  <option className='option-document' value="RUC" >RUC</option>
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <p>N° de documento: </p>
                  <input
                    maxLength={documento == "DNI" ? 8 : 10}
                    type='text'
                    value={num_documento}
                    onChange={(e) => cambiarNumDocumento(e)}
                    placeholder='Ingresa tu número de documento'
                    required />
                </div>
                <button
                  onClick={
                    () => documento == null ? showToast(
                      "success",
                      "Falta el tipo de documento",
                      `Seleccione el tipo de documento`
                    )
                      : documento == "DNI" ? getDNI() : getRUC()
                  }
                  className="btn-validar"
                  style={{
                    backgroundColor: "#3a6adb", color: "white", fontWeight: "bold",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    border: "none"
                  }}>Validar</button>
              </div>
              <div>
                <p>Nombres: </p>
                <input type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Ingresa tus nombres' required />
              </div>
              <div>
                <p>Apellidos: </p>
                <input type='text' value={apellidos} onChange={(e) => setApellidos(e.target.value)} placeholder='Ingresa tus apellidos' required />
              </div>
              <div>
                <p>Teléfono: </p>
                <input maxLength={9} type='text' value={telefono} onChange={(e) => cambiarTelefono(e)} placeholder='Ingresa' required />
              </div>
              <div>
                <p>Correo electrónico: </p>
                <input type='email' value={correo} onChange={(e)=> setCorreo(e.target.value)} placeholder='Ingresa' required />
              </div>
              <div>
                <p>Departamento: </p>
                <select required className='tip_document' name="departamento" id="select" onChange={(e) => setDepartamento(e.target.value)}>
                  <option className='option-document' value="" >DEPARTAMENTO</option>
                  {dataUbicacion?.map((departamento) => {
                    return (
                      <option key={departamento.id} value={departamento.departamento}>{departamento.departamento}</option>
                    )
                  })}
                </select>
              </div>
              <div>
                <p>Distrito / Ciudad: </p>
                <input type='text' value={distrito} onChange={(e) => setDistrito(e.target.value)} placeholder='Ingresa' required />
              </div>
              <div>
                <p>Dirección de envío: </p>
                <input type='text' value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder='Ingresa' required />
              </div>
              <div>
                <p>Referencia</p>
                <input type='text' value={referencia} onChange={(e) => setReferencia(e.target.value)} placeholder='Ingresa' required />
              </div>
              <div>
                <p>Información Adicional (opcional) </p>
                <input type='text' value={info} onChange={(e) => setInfo(e.target.value)} placeholder='Ingresa' required />
              </div>
            </div>
          </div>
          <div className='seccion-info'>

            <div style={{ color: "#3a6adb", fontWeight: "bold" }}>TU PEDIDO</div>
            <div className='pedido-info'>
              <p>PRODUCTO</p><p>SUBTOTAL</p>
            </div>
            {carrito?.map((item) => {
              return (
                <div key={item.id} className='productos-pedido'>
                  <p>{item.nombre} x {item.cantidad}</p><strong>S/ {item.subtotal}</strong>
                </div>
              )
            })}
            <div className='pedido-info'>
              <strong>Subtotal</strong><p>S/ {totalCarrito}</p>
            </div>
            <div className='pedido-info'>
              <strong>Total</strong><p>S/ {totalCarrito}</p>
            </div>
            <div className='box-radios'>
              <div className='radios-btn'>
                <RadioButton inputId="1" name="deposito" value="Deposito" onChange={(e) => setPago(e.value)} checked={pago === 'Deposito'} />
                <label className={pago == "Deposito" ? "selectRadio" : ""} htmlFor=""> Depósito o transferencia bancaria</label>
              </div>
              <div className='radios-btn'>
                <RadioButton inputId="2" name="yape" value="Yape" onChange={(e) => setPago(e.value)} checked={pago === 'Yape'} />
                <label className={pago == "Yape" ? "selectRadio" : ""} htmlFor=""> Pago por Yape</label>
              </div>
            </div>
            {
              pago == "Deposito" ?
                (
                  <>
                    <div className='metodo-box'>
                      <p>Realiza tu pago directamente en nuestras cuentas bancarias:</p>
                      <div className='box-bancos'>
                        <div className='box-banco-info'>
                          <img width={"50PX"} src={iconBCP} alt="iconBanco" />
                          <p>BCP</p>
                          <p>191-04892533-0-45</p>
                          <p>Titular: A24</p>
                        </div>
                        <div className='box-banco-info'>
                          <img width={"50PX"} src={iconBBVA} alt="iconBanco" />
                          <p>BBVA</p>
                          <p>191-04892533-0-45</p>
                          <p>Titular: A24</p>
                        </div>
                      </div>
                      <div className='box-bancos'>
                        <div className='box-banco-info'>
                          <img width={"50PX"} src={iconInterBank} alt="iconBanco" />
                          <p>INTERBANK</p>
                          <p>191-04892533-0-45</p>
                          <p>Titular: A24</p>
                        </div>
                        <div className='box-banco-info'>
                          <img width={"50PX"} src={iconScotiabank} alt="iconBanco" />
                          <p>SCOTIABANK</p>
                          <p>191-04892533-0-45</p>
                          <p>Titular: A24</p>
                        </div>
                      </div>
                      <p>Una vez realizado el abono por favor enviar el voucher a nuestro whatsapp</p>
                      <div className='box-numero'>
                        <img width={"30px"} src={iconWhatsapp} alt="iconWhatsap" />
                        <p>929863124</p>
                      </div>
                      <p>Muchas Gracias!!</p>
                    </div>
                  </>
                )
                :
                (
                  <>
                    <div className='metodo-box'>
                      <div className='box-billeteras'>
                        <p>Paga con YAPE o PLIN 100% seguro</p>
                        <img width={"30px"} src={iconYape} alt="iconBilletera" />
                        <img width={"30px"} src={iconPlin} alt="iconBilletera" />
                      </div>

                      <div className='box-billeteras'>
                        <img width={"30px"} src={iconYape} alt="iconBilletera" />
                        <p>Escanea el siguiente QR:</p>
                      </div>
                      <div style={{ margin: "10px 0px" }}>
                        <img width={"150px"} src="https://i.pinimg.com/736x/bf/4f/de/bf4fde38604478ba419bd02a7a094d19.jpg" alt="" />
                      </div>
                      <p>o agrega el siguiente número:</p>
                      <h4>929863124</h4>
                      <p>Titular: A24</p>
                      <p>Una vez realizado el abono por favor enviar el voucher a nuestro whatsapp</p>
                      <div className='box-numero'>
                        <img width={"30px"} src={iconWhatsapp} alt="iconWhatsap" />
                        <p>929863124</p>
                      </div>
                      <p>Muchas Gracias!!</p>
                    </div>
                  </>
                )
            }
            <Button onClick={()=> crearPedido()} className='btn-pedido'>Realizar el pedido</Button>
          </div>

        </div>


      </div>
    </>
  )
}
export default FinalizarCompra;
