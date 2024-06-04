import React, { createContext, useEffect, useState } from 'react';

export const ClienteContext = createContext();

export const ClienteProvider = (props) => {
const dataUbicacion = [
      {
        "id": 1,
        "departamento": "AMAZONAS",
        "provincias": [
          {
            "id": 1,
            "provincia": "CHACHAPOYAS ",
            "departamento_id": 1,
            "distritos": [
              {
                "id": 1,
                "distrito": "CHACHAPOYAS",
                "provincia_id": 1
              },
              {
                "id": 2,
                "distrito": "ASUNCION",
                "provincia_id": 1
              },
              {
                "id": 3,
                "distrito": "BALSAS",
                "provincia_id": 1
              },
              {
                "id": 4,
                "distrito": "CHETO",
                "provincia_id": 1
              },
              {
                "id": 5,
                "distrito": "CHILIQUIN",
                "provincia_id": 1
              },
              {
                "id": 6,
                "distrito": "CHUQUIBAMBA",
                "provincia_id": 1
              },
              {
                "id": 7,
                "distrito": "GRANADA",
                "provincia_id": 1
              },
              {
                "id": 8,
                "distrito": "HUANCAS",
                "provincia_id": 1
              },
              {
                "id": 9,
                "distrito": "LA JALCA",
                "provincia_id": 1
              },
              {
                "id": 10,
                "distrito": "LEIMEBAMBA",
                "provincia_id": 1
              },
              {
                "id": 11,
                "distrito": "LEVANTO",
                "provincia_id": 1
              },
              {
                "id": 12,
                "distrito": "MAGDALENA",
                "provincia_id": 1
              },
              {
                "id": 13,
                "distrito": "MARISCAL CASTILLA",
                "provincia_id": 1
              },
              {
                "id": 14,
                "distrito": "MOLINOPAMPA",
                "provincia_id": 1
              },
              {
                "id": 15,
                "distrito": "MONTEVIDEO",
                "provincia_id": 1
              },
              {
                "id": 16,
                "distrito": "OLLEROS",
                "provincia_id": 1
              },
              {
                "id": 17,
                "distrito": "QUINJALCA",
                "provincia_id": 1
              },
              {
                "id": 18,
                "distrito": "SAN FRANCISCO DE DAGUAS",
                "provincia_id": 1
              },
              {
                "id": 19,
                "distrito": "SAN ISIDRO DE MAINO",
                "provincia_id": 1
              },
              {
                "id": 20,
                "distrito": "SOLOCO",
                "provincia_id": 1
              },
              {
                "id": 21,
                "distrito": "SONCHE",
                "provincia_id": 1
              }
            ]
          },
          {
            "id": 2,
            "provincia": "BAGUA",
            "departamento_id": 1,
            "distritos": [
              {
                "id": 22,
                "distrito": "LA PECA",
                "provincia_id": 2
              },
              {
                "id": 23,
                "distrito": "ARAMANGO",
                "provincia_id": 2
              },
              {
                "id": 24,
                "distrito": "COPALLIN",
                "provincia_id": 2
              },
              {
                "id": 25,
                "distrito": "EL PARCO",
                "provincia_id": 2
              },
              {
                "id": 26,
                "distrito": "IMAZA",
                "provincia_id": 2
              }
            ]
          },
          {
            "id": 3,
            "provincia": "BONGARA",
            "departamento_id": 1,
            "distritos": [
              {
                "id": 27,
                "distrito": "JUMBILLA",
                "provincia_id": 3
              },
              {
                "id": 28,
                "distrito": "CHISQUILLA",
                "provincia_id": 3
              },
              {
                "id": 29,
                "distrito": "CHURUJA",
                "provincia_id": 3
              },
              {
                "id": 30,
                "distrito": "COROSHA",
                "provincia_id": 3
              },
              {
                "id": 31,
                "distrito": "CUISPES",
                "provincia_id": 3
              },
              {
                "id": 32,
                "distrito": "FLORIDA",
                "provincia_id": 3
              },
              {
                "id": 33,
                "distrito": "JAZAN",
                "provincia_id": 3
              },
              {
                "id": 34,
                "distrito": "RECTA",
                "provincia_id": 3
              },
              {
                "id": 35,
                "distrito": "SAN CARLOS",
                "provincia_id": 3
              },
              {
                "id": 36,
                "distrito": "SHIPASBAMBA",
                "provincia_id": 3
              },
              {
                "id": 37,
                "distrito": "VALERA",
                "provincia_id": 3
              },
              {
                "id": 38,
                "distrito": "YAMBRASBAMBA",
                "provincia_id": 3
              }
            ]
          },
          {
            "id": 4,
            "provincia": "CONDORCANQUI",
            "departamento_id": 1,
            "distritos": [
              {
                "id": 39,
                "distrito": "NIEVA",
                "provincia_id": 4
              },
              {
                "id": 40,
                "distrito": "EL CENEPA",
                "provincia_id": 4
              },
              {
                "id": 41,
                "distrito": "RIO SANTIAGO",
                "provincia_id": 4
              }
            ]
          },
          {
            "id": 5,
            "provincia": "LUYA",
            "departamento_id": 1,
            "distritos": [
              {
                "id": 42,
                "distrito": "LAMUD",
                "provincia_id": 5
              },
              {
                "id": 43,
                "distrito": "CAMPORREDONDO",
                "provincia_id": 5
              },
              {
                "id": 44,
                "distrito": "COCABAMBA",
                "provincia_id": 5
              },
              {
                "id": 45,
                "distrito": "COLCAMAR",
                "provincia_id": 5
              },
              {
                "id": 46,
                "distrito": "CONILA",
                "provincia_id": 5
              },
              {
                "id": 47,
                "distrito": "INGUILPATA",
                "provincia_id": 5
              },
              {
                "id": 48,
                "distrito": "LONGUITA",
                "provincia_id": 5
              },
              {
                "id": 49,
                "distrito": "LONYA CHICO",
                "provincia_id": 5
              },
              {
                "id": 50,
                "distrito": "LUYA",
                "provincia_id": 5
              },
              {
                "id": 51,
                "distrito": "LUYA VIEJO",
                "provincia_id": 5
              },
              {
                "id": 52,
                "distrito": "MARIA",
                "provincia_id": 5
              },
              {
                "id": 53,
                "distrito": "OCALLI",
                "provincia_id": 5
              },
              {
                "id": 54,
                "distrito": "OCUMAL",
                "provincia_id": 5
              },
              {
                "id": 55,
                "distrito": "PISUQUIA",
                "provincia_id": 5
              },
              {
                "id": 56,
                "distrito": "PROVIDENCIA",
                "provincia_id": 5
              },
              {
                "id": 57,
                "distrito": "SAN CRISTOBAL",
                "provincia_id": 5
              },
              {
                "id": 58,
                "distrito": "SAN FRANCISCO DEL YESO",
                "provincia_id": 5
              },
              {
                "id": 59,
                "distrito": "SAN JERONIMO",
                "provincia_id": 5
              },
              {
                "id": 60,
                "distrito": "SAN JUAN DE LOPECANCHA",
                "provincia_id": 5
              },
              {
                "id": 61,
                "distrito": "SANTA CATALINA",
                "provincia_id": 5
              },
              {
                "id": 62,
                "distrito": "SANTO TOMAS",
                "provincia_id": 5
              },
              {
                "id": 63,
                "distrito": "TINGO",
                "provincia_id": 5
              },
              {
                "id": 64,
                "distrito": "TRITA",
                "provincia_id": 5
              }
            ]
          },
          {
            "id": 6,
            "provincia": "RODRIGUEZ DE MENDOZA",
            "departamento_id": 1,
            "distritos": [
              {
                "id": 65,
                "distrito": "SAN NICOLAS",
                "provincia_id": 6
              },
              {
                "id": 66,
                "distrito": "CHIRIMOTO",
                "provincia_id": 6
              },
              {
                "id": 67,
                "distrito": "COCHAMAL",
                "provincia_id": 6
              },
              {
                "id": 68,
                "distrito": "HUAMBO",
                "provincia_id": 6
              },
              {
                "id": 69,
                "distrito": "LIMABAMBA",
                "provincia_id": 6
              },
              {
                "id": 70,
                "distrito": "LONGAR",
                "provincia_id": 6
              },
              {
                "id": 71,
                "distrito": "MARISCAL BENAVIDES",
                "provincia_id": 6
              },
              {
                "id": 72,
                "distrito": "MILPUC",
                "provincia_id": 6
              },
              {
                "id": 73,
                "distrito": "OMIA",
                "provincia_id": 6
              },
              {
                "id": 74,
                "distrito": "SANTA ROSA",
                "provincia_id": 6
              },
              {
                "id": 75,
                "distrito": "TOTORA",
                "provincia_id": 6
              },
              {
                "id": 76,
                "distrito": "VISTA ALEGRE",
                "provincia_id": 6
              }
            ]
          },
          {
            "id": 7,
            "provincia": "UTCUBAMBA",
            "departamento_id": 1,
            "distritos": [
              {
                "id": 77,
                "distrito": "BAGUA GRANDE",
                "provincia_id": 7
              },
              {
                "id": 78,
                "distrito": "CAJARURO",
                "provincia_id": 7
              },
              {
                "id": 79,
                "distrito": "CUMBA",
                "provincia_id": 7
              },
              {
                "id": 80,
                "distrito": "EL MILAGRO",
                "provincia_id": 7
              },
              {
                "id": 81,
                "distrito": "JAMALCA",
                "provincia_id": 7
              },
              {
                "id": 82,
                "distrito": "LONYA GRANDE",
                "provincia_id": 7
              },
              {
                "id": 83,
                "distrito": "YAMON",
                "provincia_id": 7
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "departamento": "ANCASH",
        "provincias": [
          {
            "id": 8,
            "provincia": "HUARAZ",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 84,
                "distrito": "HUARAZ",
                "provincia_id": 8
              },
              {
                "id": 85,
                "distrito": "COCHABAMBA",
                "provincia_id": 8
              },
              {
                "id": 86,
                "distrito": "COLCABAMBA",
                "provincia_id": 8
              },
              {
                "id": 87,
                "distrito": "HUANCHAY",
                "provincia_id": 8
              },
              {
                "id": 88,
                "distrito": "INDEPENDENCIA",
                "provincia_id": 8
              },
              {
                "id": 89,
                "distrito": "JANGAS",
                "provincia_id": 8
              },
              {
                "id": 90,
                "distrito": "LA LIBERTAD",
                "provincia_id": 8
              },
              {
                "id": 91,
                "distrito": "OLLEROS",
                "provincia_id": 8
              },
              {
                "id": 92,
                "distrito": "PAMPAS",
                "provincia_id": 8
              },
              {
                "id": 93,
                "distrito": "PARIACOTO",
                "provincia_id": 8
              },
              {
                "id": 94,
                "distrito": "PIRA",
                "provincia_id": 8
              },
              {
                "id": 95,
                "distrito": "TARICA",
                "provincia_id": 8
              }
            ]
          },
          {
            "id": 9,
            "provincia": "AIJA",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 96,
                "distrito": "AIJA",
                "provincia_id": 9
              },
              {
                "id": 97,
                "distrito": "CORIS",
                "provincia_id": 9
              },
              {
                "id": 98,
                "distrito": "HUACLLAN",
                "provincia_id": 9
              },
              {
                "id": 99,
                "distrito": "LA MERCED",
                "provincia_id": 9
              },
              {
                "id": 100,
                "distrito": "SUCCHA",
                "provincia_id": 9
              }
            ]
          },
          {
            "id": 10,
            "provincia": "ANTONIO RAYMONDI",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 101,
                "distrito": "LLAMELLIN",
                "provincia_id": 10
              },
              {
                "id": 102,
                "distrito": "ACZO",
                "provincia_id": 10
              },
              {
                "id": 103,
                "distrito": "CHACCHO",
                "provincia_id": 10
              },
              {
                "id": 104,
                "distrito": "CHINGAS",
                "provincia_id": 10
              },
              {
                "id": 105,
                "distrito": "MIRGAS",
                "provincia_id": 10
              },
              {
                "id": 106,
                "distrito": "SAN JUAN DE RONTOY",
                "provincia_id": 10
              }
            ]
          },
          {
            "id": 11,
            "provincia": "ASUNCION",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 107,
                "distrito": "CHACAS",
                "provincia_id": 11
              },
              {
                "id": 108,
                "distrito": "ACOCHACA",
                "provincia_id": 11
              }
            ]
          },
          {
            "id": 12,
            "provincia": "BOLOGNESI",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 109,
                "distrito": "CHIQUIAN",
                "provincia_id": 12
              },
              {
                "id": 110,
                "distrito": "ABELARDO PARDO LEZAMETA",
                "provincia_id": 12
              },
              {
                "id": 111,
                "distrito": "ANTONIO RAYMONDI",
                "provincia_id": 12
              },
              {
                "id": 112,
                "distrito": "AQUIA",
                "provincia_id": 12
              },
              {
                "id": 113,
                "distrito": "CAJACAY",
                "provincia_id": 12
              },
              {
                "id": 114,
                "distrito": "CANIS",
                "provincia_id": 12
              },
              {
                "id": 115,
                "distrito": "COLQUIOC",
                "provincia_id": 12
              },
              {
                "id": 116,
                "distrito": "HUALLANCA",
                "provincia_id": 12
              },
              {
                "id": 117,
                "distrito": "HUASTA",
                "provincia_id": 12
              },
              {
                "id": 118,
                "distrito": "HUAYLLACAYAN",
                "provincia_id": 12
              },
              {
                "id": 119,
                "distrito": "LA PRIMAVERA",
                "provincia_id": 12
              },
              {
                "id": 120,
                "distrito": "MANGAS",
                "provincia_id": 12
              },
              {
                "id": 121,
                "distrito": "PACLLON",
                "provincia_id": 12
              },
              {
                "id": 122,
                "distrito": "SAN MIGUEL DE CORPANQUI",
                "provincia_id": 12
              },
              {
                "id": 123,
                "distrito": "TICLLOS",
                "provincia_id": 12
              }
            ]
          },
          {
            "id": 13,
            "provincia": "CARHUAZ",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 124,
                "distrito": "CARHUAZ",
                "provincia_id": 13
              },
              {
                "id": 125,
                "distrito": "ACOPAMPA",
                "provincia_id": 13
              },
              {
                "id": 126,
                "distrito": "AMASHCA",
                "provincia_id": 13
              },
              {
                "id": 127,
                "distrito": "ANTA",
                "provincia_id": 13
              },
              {
                "id": 128,
                "distrito": "ATAQUERO",
                "provincia_id": 13
              },
              {
                "id": 129,
                "distrito": "MARCARA",
                "provincia_id": 13
              },
              {
                "id": 130,
                "distrito": "PARIAHUANCA",
                "provincia_id": 13
              },
              {
                "id": 131,
                "distrito": "SAN MIGUEL DE ACO",
                "provincia_id": 13
              },
              {
                "id": 132,
                "distrito": "SHILLA",
                "provincia_id": 13
              },
              {
                "id": 133,
                "distrito": "TINCO",
                "provincia_id": 13
              },
              {
                "id": 134,
                "distrito": "YUNGAR",
                "provincia_id": 13
              }
            ]
          },
          {
            "id": 14,
            "provincia": "CARLOS FERMIN FITZCARRALD",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 135,
                "distrito": "SAN LUIS",
                "provincia_id": 14
              },
              {
                "id": 136,
                "distrito": "SAN NICOLAS",
                "provincia_id": 14
              },
              {
                "id": 137,
                "distrito": "YAUYA",
                "provincia_id": 14
              }
            ]
          },
          {
            "id": 15,
            "provincia": "CASMA",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 138,
                "distrito": "CASMA",
                "provincia_id": 15
              },
              {
                "id": 139,
                "distrito": "BUENA VISTA ALTA",
                "provincia_id": 15
              },
              {
                "id": 140,
                "distrito": "COMANDANTE NOEL",
                "provincia_id": 15
              },
              {
                "id": 141,
                "distrito": "YAUTAN",
                "provincia_id": 15
              }
            ]
          },
          {
            "id": 16,
            "provincia": "CORONGO",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 142,
                "distrito": "CORONGO",
                "provincia_id": 16
              },
              {
                "id": 143,
                "distrito": "ACO",
                "provincia_id": 16
              },
              {
                "id": 144,
                "distrito": "BAMBAS",
                "provincia_id": 16
              },
              {
                "id": 145,
                "distrito": "CUSCA",
                "provincia_id": 16
              },
              {
                "id": 146,
                "distrito": "LA PAMPA",
                "provincia_id": 16
              },
              {
                "id": 147,
                "distrito": "YANAC",
                "provincia_id": 16
              },
              {
                "id": 148,
                "distrito": "YUPAN",
                "provincia_id": 16
              }
            ]
          },
          {
            "id": 17,
            "provincia": "HUARI",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 149,
                "distrito": "HUARI",
                "provincia_id": 17
              },
              {
                "id": 150,
                "distrito": "ANRA",
                "provincia_id": 17
              },
              {
                "id": 151,
                "distrito": "CAJAY",
                "provincia_id": 17
              },
              {
                "id": 152,
                "distrito": "CHAVIN DE HUANTAR",
                "provincia_id": 17
              },
              {
                "id": 153,
                "distrito": "HUACACHI",
                "provincia_id": 17
              },
              {
                "id": 154,
                "distrito": "HUACCHIS",
                "provincia_id": 17
              },
              {
                "id": 155,
                "distrito": "HUACHIS",
                "provincia_id": 17
              },
              {
                "id": 156,
                "distrito": "HUANTAR",
                "provincia_id": 17
              },
              {
                "id": 157,
                "distrito": "MASIN",
                "provincia_id": 17
              },
              {
                "id": 158,
                "distrito": "PAUCAS",
                "provincia_id": 17
              },
              {
                "id": 159,
                "distrito": "PONTO",
                "provincia_id": 17
              },
              {
                "id": 160,
                "distrito": "RAHUAPAMPA",
                "provincia_id": 17
              },
              {
                "id": 161,
                "distrito": "RAPAYAN",
                "provincia_id": 17
              },
              {
                "id": 162,
                "distrito": "SAN MARCOS",
                "provincia_id": 17
              },
              {
                "id": 163,
                "distrito": "SAN PEDRO DE CHANA",
                "provincia_id": 17
              },
              {
                "id": 164,
                "distrito": "UCO",
                "provincia_id": 17
              }
            ]
          },
          {
            "id": 18,
            "provincia": "HUARMEY",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 165,
                "distrito": "HUARMEY",
                "provincia_id": 18
              },
              {
                "id": 166,
                "distrito": "COCHAPETI",
                "provincia_id": 18
              },
              {
                "id": 167,
                "distrito": "CULEBRAS",
                "provincia_id": 18
              },
              {
                "id": 168,
                "distrito": "HUAYAN",
                "provincia_id": 18
              },
              {
                "id": 169,
                "distrito": "MALVAS",
                "provincia_id": 18
              }
            ]
          },
          {
            "id": 19,
            "provincia": "HUAYLAS",
            "departamento_id": 2,
            "distritos": []
          },
          {
            "id": 20,
            "provincia": "MARISCAL LUZURIAGA",
            "departamento_id": 2,
            "distritos": []
          },
          {
            "id": 21,
            "provincia": "OCROS",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 188,
                "distrito": "OCROS",
                "provincia_id": 21
              },
              {
                "id": 189,
                "distrito": "ACAS",
                "provincia_id": 21
              },
              {
                "id": 190,
                "distrito": "CAJAMARQUILLA",
                "provincia_id": 21
              },
              {
                "id": 191,
                "distrito": "CARHUAPAMPA",
                "provincia_id": 21
              },
              {
                "id": 192,
                "distrito": "COCHAS",
                "provincia_id": 21
              },
              {
                "id": 193,
                "distrito": "CONGAS",
                "provincia_id": 21
              },
              {
                "id": 194,
                "distrito": "LLIPA",
                "provincia_id": 21
              },
              {
                "id": 195,
                "distrito": "SAN CRISTOBAL DE RAJAN",
                "provincia_id": 21
              },
              {
                "id": 196,
                "distrito": "SAN PEDRO",
                "provincia_id": 21
              },
              {
                "id": 197,
                "distrito": "SANTIAGO DE CHILCAS",
                "provincia_id": 21
              }
            ]
          },
          {
            "id": 22,
            "provincia": "PALLASCA",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 198,
                "distrito": "CABANA",
                "provincia_id": 22
              },
              {
                "id": 199,
                "distrito": "BOLOGNESI",
                "provincia_id": 22
              },
              {
                "id": 200,
                "distrito": "CONCHUCOS",
                "provincia_id": 22
              },
              {
                "id": 201,
                "distrito": "HUACASCHUQUE",
                "provincia_id": 22
              },
              {
                "id": 202,
                "distrito": "HUANDOVAL",
                "provincia_id": 22
              },
              {
                "id": 203,
                "distrito": "LACABAMBA",
                "provincia_id": 22
              },
              {
                "id": 204,
                "distrito": "LLAPO",
                "provincia_id": 22
              },
              {
                "id": 205,
                "distrito": "PALLASCA",
                "provincia_id": 22
              },
              {
                "id": 206,
                "distrito": "PAMPAS",
                "provincia_id": 22
              },
              {
                "id": 207,
                "distrito": "SANTA ROSA",
                "provincia_id": 22
              },
              {
                "id": 208,
                "distrito": "TAUCA",
                "provincia_id": 22
              }
            ]
          },
          {
            "id": 23,
            "provincia": "POMABAMBA",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 209,
                "distrito": "POMABAMBA",
                "provincia_id": 23
              },
              {
                "id": 210,
                "distrito": "HUAYLLAN",
                "provincia_id": 23
              },
              {
                "id": 211,
                "distrito": "PAROBAMBA",
                "provincia_id": 23
              },
              {
                "id": 212,
                "distrito": "QUINUABAMBA",
                "provincia_id": 23
              }
            ]
          },
          {
            "id": 24,
            "provincia": "RECUAY",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 213,
                "distrito": "RECUAY",
                "provincia_id": 24
              },
              {
                "id": 214,
                "distrito": "CATAC",
                "provincia_id": 24
              },
              {
                "id": 215,
                "distrito": "COTAPARACO",
                "provincia_id": 24
              },
              {
                "id": 216,
                "distrito": "HUAYLLAPAMPA",
                "provincia_id": 24
              },
              {
                "id": 217,
                "distrito": "LLACLLIN",
                "provincia_id": 24
              },
              {
                "id": 218,
                "distrito": "MARCA",
                "provincia_id": 24
              },
              {
                "id": 219,
                "distrito": "PAMPAS CHICO",
                "provincia_id": 24
              },
              {
                "id": 220,
                "distrito": "PARARIN",
                "provincia_id": 24
              },
              {
                "id": 221,
                "distrito": "TAPACOCHA",
                "provincia_id": 24
              },
              {
                "id": 222,
                "distrito": "TICAPAMPA",
                "provincia_id": 24
              }
            ]
          },
          {
            "id": 25,
            "provincia": "SANTA",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 223,
                "distrito": "CHIMBOTE",
                "provincia_id": 25
              },
              {
                "id": 224,
                "distrito": "CACERES DEL PERU",
                "provincia_id": 25
              },
              {
                "id": 225,
                "distrito": "COISHCO",
                "provincia_id": 25
              },
              {
                "id": 226,
                "distrito": "MACATE",
                "provincia_id": 25
              },
              {
                "id": 227,
                "distrito": "MORO",
                "provincia_id": 25
              },
              {
                "id": 228,
                "distrito": "NEPEÑA",
                "provincia_id": 25
              },
              {
                "id": 229,
                "distrito": "SAMANCO",
                "provincia_id": 25
              },
              {
                "id": 230,
                "distrito": "SANTA",
                "provincia_id": 25
              },
              {
                "id": 231,
                "distrito": "NUEVO CHIMBOTE",
                "provincia_id": 25
              }
            ]
          },
          {
            "id": 26,
            "provincia": "SIHUAS",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 170,
                "distrito": "CARAZ",
                "provincia_id": 26
              },
              {
                "id": 171,
                "distrito": "HUALLANCA",
                "provincia_id": 26
              },
              {
                "id": 172,
                "distrito": "HUATA",
                "provincia_id": 26
              },
              {
                "id": 173,
                "distrito": "HUAYLAS",
                "provincia_id": 26
              },
              {
                "id": 174,
                "distrito": "MATO",
                "provincia_id": 26
              },
              {
                "id": 175,
                "distrito": "PAMPAROMAS",
                "provincia_id": 26
              },
              {
                "id": 176,
                "distrito": "PUEBLO LIBRE",
                "provincia_id": 26
              },
              {
                "id": 177,
                "distrito": "SANTA CRUZ",
                "provincia_id": 26
              },
              {
                "id": 178,
                "distrito": "SANTO TORIBIO",
                "provincia_id": 26
              },
              {
                "id": 179,
                "distrito": "YURACMARCA",
                "provincia_id": 26
              },
              {
                "id": 232,
                "distrito": "SIHUAS",
                "provincia_id": 26
              },
              {
                "id": 233,
                "distrito": "ACOBAMBA",
                "provincia_id": 26
              },
              {
                "id": 234,
                "distrito": "ALFONSO UGARTE",
                "provincia_id": 26
              },
              {
                "id": 235,
                "distrito": "CASHAPAMPA",
                "provincia_id": 26
              },
              {
                "id": 236,
                "distrito": "CHINGALPO",
                "provincia_id": 26
              },
              {
                "id": 237,
                "distrito": "HUAYLLABAMBA",
                "provincia_id": 26
              },
              {
                "id": 238,
                "distrito": "QUICHES",
                "provincia_id": 26
              },
              {
                "id": 239,
                "distrito": "RAGASH",
                "provincia_id": 26
              },
              {
                "id": 240,
                "distrito": "SAN JUAN",
                "provincia_id": 26
              },
              {
                "id": 241,
                "distrito": "SICSIBAMBA",
                "provincia_id": 26
              }
            ]
          },
          {
            "id": 27,
            "provincia": "YUNGAY",
            "departamento_id": 2,
            "distritos": [
              {
                "id": 180,
                "distrito": "PISCOBAMBA",
                "provincia_id": 27
              },
              {
                "id": 181,
                "distrito": "CASCA",
                "provincia_id": 27
              },
              {
                "id": 182,
                "distrito": "ELEAZAR GUZMAN BARRON",
                "provincia_id": 27
              },
              {
                "id": 183,
                "distrito": "FIDEL OLIVAS ESCUDERO",
                "provincia_id": 27
              },
              {
                "id": 184,
                "distrito": "LLAMA",
                "provincia_id": 27
              },
              {
                "id": 185,
                "distrito": "LLUMPA",
                "provincia_id": 27
              },
              {
                "id": 186,
                "distrito": "LUCMA",
                "provincia_id": 27
              },
              {
                "id": 187,
                "distrito": "MUSGA",
                "provincia_id": 27
              },
              {
                "id": 242,
                "distrito": "YUNGAY",
                "provincia_id": 27
              },
              {
                "id": 243,
                "distrito": "CASCAPARA",
                "provincia_id": 27
              },
              {
                "id": 244,
                "distrito": "MANCOS",
                "provincia_id": 27
              },
              {
                "id": 245,
                "distrito": "MATACOTO",
                "provincia_id": 27
              },
              {
                "id": 246,
                "distrito": "QUILLO",
                "provincia_id": 27
              },
              {
                "id": 247,
                "distrito": "RANRAHIRCA",
                "provincia_id": 27
              },
              {
                "id": 248,
                "distrito": "SHUPLUY",
                "provincia_id": 27
              },
              {
                "id": 249,
                "distrito": "YANAMA",
                "provincia_id": 27
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "departamento": "APURIMAC",
        "provincias": [
          {
            "id": 28,
            "provincia": "ABANCAY",
            "departamento_id": 3,
            "distritos": [
              {
                "id": 250,
                "distrito": "ABANCAY",
                "provincia_id": 28
              },
              {
                "id": 251,
                "distrito": "CHACOCHE",
                "provincia_id": 28
              },
              {
                "id": 252,
                "distrito": "CIRCA",
                "provincia_id": 28
              },
              {
                "id": 253,
                "distrito": "CURAHUASI",
                "provincia_id": 28
              },
              {
                "id": 254,
                "distrito": "HUANIPACA",
                "provincia_id": 28
              },
              {
                "id": 255,
                "distrito": "LAMBRAMA",
                "provincia_id": 28
              },
              {
                "id": 256,
                "distrito": "PICHIRHUA",
                "provincia_id": 28
              },
              {
                "id": 257,
                "distrito": "SAN PEDRO DE CACHORA",
                "provincia_id": 28
              },
              {
                "id": 258,
                "distrito": "TAMBURCO",
                "provincia_id": 28
              }
            ]
          },
          {
            "id": 29,
            "provincia": "ANDAHUAYLAS",
            "departamento_id": 3,
            "distritos": [
              {
                "id": 259,
                "distrito": "ANDAHUAYLAS",
                "provincia_id": 29
              },
              {
                "id": 260,
                "distrito": "ANDARAPA",
                "provincia_id": 29
              },
              {
                "id": 261,
                "distrito": "CHIARA",
                "provincia_id": 29
              },
              {
                "id": 262,
                "distrito": "HUANCARAMA",
                "provincia_id": 29
              },
              {
                "id": 263,
                "distrito": "HUANCARAY",
                "provincia_id": 29
              },
              {
                "id": 264,
                "distrito": "HUAYANA",
                "provincia_id": 29
              },
              {
                "id": 265,
                "distrito": "KISHUARA",
                "provincia_id": 29
              },
              {
                "id": 266,
                "distrito": "PACOBAMBA",
                "provincia_id": 29
              },
              {
                "id": 267,
                "distrito": "PACUCHA",
                "provincia_id": 29
              },
              {
                "id": 268,
                "distrito": "PAMPACHIRI",
                "provincia_id": 29
              },
              {
                "id": 269,
                "distrito": "POMACOCHA",
                "provincia_id": 29
              },
              {
                "id": 270,
                "distrito": "SAN ANTONIO DE CACHI",
                "provincia_id": 29
              },
              {
                "id": 271,
                "distrito": "SAN JERONIMO",
                "provincia_id": 29
              },
              {
                "id": 272,
                "distrito": "SAN MIGUEL DE CHACCRAMPA",
                "provincia_id": 29
              },
              {
                "id": 273,
                "distrito": "SANTA MARIA DE CHICMO",
                "provincia_id": 29
              },
              {
                "id": 274,
                "distrito": "TALAVERA",
                "provincia_id": 29
              },
              {
                "id": 275,
                "distrito": "TUMAY HUARACA",
                "provincia_id": 29
              },
              {
                "id": 276,
                "distrito": "TURPO",
                "provincia_id": 29
              },
              {
                "id": 277,
                "distrito": "KAQUIABAMBA",
                "provincia_id": 29
              }
            ]
          },
          {
            "id": 30,
            "provincia": "ANTABAMBA",
            "departamento_id": 3,
            "distritos": [
              {
                "id": 278,
                "distrito": "ANTABAMBA",
                "provincia_id": 30
              },
              {
                "id": 279,
                "distrito": "EL ORO",
                "provincia_id": 30
              },
              {
                "id": 280,
                "distrito": "HUAQUIRCA",
                "provincia_id": 30
              },
              {
                "id": 281,
                "distrito": "JUAN ESPINOZA MEDRANO",
                "provincia_id": 30
              },
              {
                "id": 282,
                "distrito": "OROPESA",
                "provincia_id": 30
              },
              {
                "id": 283,
                "distrito": "PACHACONAS",
                "provincia_id": 30
              },
              {
                "id": 284,
                "distrito": "SABAINO",
                "provincia_id": 30
              }
            ]
          },
          {
            "id": 31,
            "provincia": "AYMARAES",
            "departamento_id": 3,
            "distritos": [
              {
                "id": 285,
                "distrito": "CHALHUANCA",
                "provincia_id": 31
              },
              {
                "id": 286,
                "distrito": "CAPAYA",
                "provincia_id": 31
              },
              {
                "id": 287,
                "distrito": "CARAYBAMBA",
                "provincia_id": 31
              },
              {
                "id": 288,
                "distrito": "CHAPIMARCA",
                "provincia_id": 31
              },
              {
                "id": 289,
                "distrito": "COLCABAMBA",
                "provincia_id": 31
              },
              {
                "id": 290,
                "distrito": "COTARUSE",
                "provincia_id": 31
              },
              {
                "id": 291,
                "distrito": "HUAYLLO",
                "provincia_id": 31
              },
              {
                "id": 292,
                "distrito": "JUSTO APU SAHUARAURA",
                "provincia_id": 31
              },
              {
                "id": 293,
                "distrito": "LUCRE",
                "provincia_id": 31
              },
              {
                "id": 294,
                "distrito": "POCOHUANCA",
                "provincia_id": 31
              },
              {
                "id": 295,
                "distrito": "SAN JUAN DE CHACÑA",
                "provincia_id": 31
              },
              {
                "id": 296,
                "distrito": "SAÑAYCA",
                "provincia_id": 31
              },
              {
                "id": 297,
                "distrito": "SORAYA",
                "provincia_id": 31
              },
              {
                "id": 298,
                "distrito": "TAPAIRIHUA",
                "provincia_id": 31
              },
              {
                "id": 299,
                "distrito": "TINTAY",
                "provincia_id": 31
              },
              {
                "id": 300,
                "distrito": "TORAYA",
                "provincia_id": 31
              },
              {
                "id": 301,
                "distrito": "YANACA",
                "provincia_id": 31
              }
            ]
          },
          {
            "id": 32,
            "provincia": "COTABAMBAS",
            "departamento_id": 3,
            "distritos": [
              {
                "id": 302,
                "distrito": "TAMBOBAMBA",
                "provincia_id": 32
              },
              {
                "id": 303,
                "distrito": "COTABAMBAS",
                "provincia_id": 32
              },
              {
                "id": 304,
                "distrito": "COYLLURQUI",
                "provincia_id": 32
              },
              {
                "id": 305,
                "distrito": "HAQUIRA",
                "provincia_id": 32
              },
              {
                "id": 306,
                "distrito": "MARA",
                "provincia_id": 32
              },
              {
                "id": 307,
                "distrito": "CHALLHUAHUACHO",
                "provincia_id": 32
              }
            ]
          },
          {
            "id": 33,
            "provincia": "CHINCHEROS",
            "departamento_id": 3,
            "distritos": [
              {
                "id": 308,
                "distrito": "CHINCHEROS",
                "provincia_id": 33
              },
              {
                "id": 309,
                "distrito": "ANCO-HUALLO",
                "provincia_id": 33
              },
              {
                "id": 310,
                "distrito": "COCHARCAS",
                "provincia_id": 33
              },
              {
                "id": 311,
                "distrito": "HUACCANA",
                "provincia_id": 33
              },
              {
                "id": 312,
                "distrito": "OCOBAMBA",
                "provincia_id": 33
              },
              {
                "id": 313,
                "distrito": "ONGOY",
                "provincia_id": 33
              },
              {
                "id": 314,
                "distrito": "URANMARCA",
                "provincia_id": 33
              },
              {
                "id": 315,
                "distrito": "RANRACANCHA",
                "provincia_id": 33
              }
            ]
          },
          {
            "id": 34,
            "provincia": "GRAU",
            "departamento_id": 3,
            "distritos": [
              {
                "id": 316,
                "distrito": "CHUQUIBAMBILLA",
                "provincia_id": 34
              },
              {
                "id": 317,
                "distrito": "CURPAHUASI",
                "provincia_id": 34
              },
              {
                "id": 318,
                "distrito": "GAMARRA",
                "provincia_id": 34
              },
              {
                "id": 319,
                "distrito": "HUAYLLATI",
                "provincia_id": 34
              },
              {
                "id": 320,
                "distrito": "MAMARA",
                "provincia_id": 34
              },
              {
                "id": 321,
                "distrito": "MICAELA BASTIDAS",
                "provincia_id": 34
              },
              {
                "id": 322,
                "distrito": "PATAYPAMPA",
                "provincia_id": 34
              },
              {
                "id": 323,
                "distrito": "PROGRESO",
                "provincia_id": 34
              },
              {
                "id": 324,
                "distrito": "SAN ANTONIO",
                "provincia_id": 34
              },
              {
                "id": 325,
                "distrito": "SANTA ROSA",
                "provincia_id": 34
              },
              {
                "id": 326,
                "distrito": "TURPAY",
                "provincia_id": 34
              },
              {
                "id": 327,
                "distrito": "VILCABAMBA",
                "provincia_id": 34
              },
              {
                "id": 328,
                "distrito": "VIRUNDO",
                "provincia_id": 34
              },
              {
                "id": 329,
                "distrito": "CURASCO",
                "provincia_id": 34
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "departamento": "AREQUIPA",
        "provincias": [
          {
            "id": 35,
            "provincia": "AREQUIPA",
            "departamento_id": 4,
            "distritos": [
              {
                "id": 330,
                "distrito": "AREQUIPA",
                "provincia_id": 35
              },
              {
                "id": 331,
                "distrito": "ALTO SELVA ALEGRE",
                "provincia_id": 35
              },
              {
                "id": 332,
                "distrito": "CAYMA",
                "provincia_id": 35
              },
              {
                "id": 333,
                "distrito": "CERRO COLORADO",
                "provincia_id": 35
              },
              {
                "id": 334,
                "distrito": "CHARACATO",
                "provincia_id": 35
              },
              {
                "id": 335,
                "distrito": "CHIGUATA",
                "provincia_id": 35
              },
              {
                "id": 336,
                "distrito": "JACOBO HUNTER",
                "provincia_id": 35
              },
              {
                "id": 337,
                "distrito": "LA JOYA",
                "provincia_id": 35
              },
              {
                "id": 338,
                "distrito": "MARIANO MELGAR",
                "provincia_id": 35
              },
              {
                "id": 339,
                "distrito": "MIRAFLORES",
                "provincia_id": 35
              },
              {
                "id": 340,
                "distrito": "MOLLEBAYA",
                "provincia_id": 35
              },
              {
                "id": 341,
                "distrito": "PAUCARPATA",
                "provincia_id": 35
              },
              {
                "id": 342,
                "distrito": "POCSI",
                "provincia_id": 35
              },
              {
                "id": 343,
                "distrito": "POLOBAYA",
                "provincia_id": 35
              },
              {
                "id": 344,
                "distrito": "QUEQUEÑA",
                "provincia_id": 35
              },
              {
                "id": 345,
                "distrito": "SABANDIA",
                "provincia_id": 35
              },
              {
                "id": 346,
                "distrito": "SACHACA",
                "provincia_id": 35
              },
              {
                "id": 347,
                "distrito": "SAN JUAN DE SIGUAS",
                "provincia_id": 35
              },
              {
                "id": 348,
                "distrito": "SAN JUAN DE TARUCANI",
                "provincia_id": 35
              },
              {
                "id": 349,
                "distrito": "SANTA ISABEL DE SIGUAS",
                "provincia_id": 35
              },
              {
                "id": 350,
                "distrito": "SANTA RITA DE SIGUAS",
                "provincia_id": 35
              },
              {
                "id": 351,
                "distrito": "SOCABAYA",
                "provincia_id": 35
              },
              {
                "id": 352,
                "distrito": "TIABAYA",
                "provincia_id": 35
              },
              {
                "id": 353,
                "distrito": "UCHUMAYO",
                "provincia_id": 35
              },
              {
                "id": 354,
                "distrito": "VITOR",
                "provincia_id": 35
              },
              {
                "id": 355,
                "distrito": "YANAHUARA",
                "provincia_id": 35
              },
              {
                "id": 356,
                "distrito": "YARABAMBA",
                "provincia_id": 35
              },
              {
                "id": 357,
                "distrito": "YURA",
                "provincia_id": 35
              },
              {
                "id": 358,
                "distrito": "JOSE LUIS BUSTAMANTE Y RIVERO",
                "provincia_id": 35
              }
            ]
          },
          {
            "id": 36,
            "provincia": "CAMANA",
            "departamento_id": 4,
            "distritos": [
              {
                "id": 359,
                "distrito": "CAMANA",
                "provincia_id": 36
              },
              {
                "id": 360,
                "distrito": "JOSE MARIA QUIMPER",
                "provincia_id": 36
              },
              {
                "id": 361,
                "distrito": "MARIANO NICOLAS VALCARCEL",
                "provincia_id": 36
              },
              {
                "id": 362,
                "distrito": "MARISCAL CACERES",
                "provincia_id": 36
              },
              {
                "id": 363,
                "distrito": "NICOLAS DE PIEROLA",
                "provincia_id": 36
              },
              {
                "id": 364,
                "distrito": "OCOÑA",
                "provincia_id": 36
              },
              {
                "id": 365,
                "distrito": "QUILCA",
                "provincia_id": 36
              },
              {
                "id": 366,
                "distrito": "SAMUEL PASTOR",
                "provincia_id": 36
              }
            ]
          },
          {
            "id": 37,
            "provincia": "CARAVELI",
            "departamento_id": 4,
            "distritos": [
              {
                "id": 367,
                "distrito": "CARAVELI",
                "provincia_id": 37
              },
              {
                "id": 368,
                "distrito": "ACARI",
                "provincia_id": 37
              },
              {
                "id": 369,
                "distrito": "ATICO",
                "provincia_id": 37
              },
              {
                "id": 370,
                "distrito": "ATIQUIPA",
                "provincia_id": 37
              },
              {
                "id": 371,
                "distrito": "BELLA UNION",
                "provincia_id": 37
              },
              {
                "id": 372,
                "distrito": "CAHUACHO",
                "provincia_id": 37
              },
              {
                "id": 373,
                "distrito": "CHALA",
                "provincia_id": 37
              },
              {
                "id": 374,
                "distrito": "CHAPARRA",
                "provincia_id": 37
              },
              {
                "id": 375,
                "distrito": "HUANUHUANU",
                "provincia_id": 37
              },
              {
                "id": 376,
                "distrito": "JAQUI",
                "provincia_id": 37
              },
              {
                "id": 377,
                "distrito": "LOMAS",
                "provincia_id": 37
              },
              {
                "id": 378,
                "distrito": "QUICACHA",
                "provincia_id": 37
              },
              {
                "id": 379,
                "distrito": "YAUCA",
                "provincia_id": 37
              }
            ]
          },
          {
            "id": 38,
            "provincia": "CASTILLA",
            "departamento_id": 4,
            "distritos": [
              {
                "id": 380,
                "distrito": "APLAO",
                "provincia_id": 38
              },
              {
                "id": 381,
                "distrito": "ANDAGUA",
                "provincia_id": 38
              },
              {
                "id": 382,
                "distrito": "AYO",
                "provincia_id": 38
              },
              {
                "id": 383,
                "distrito": "CHACHAS",
                "provincia_id": 38
              },
              {
                "id": 384,
                "distrito": "CHILCAYMARCA",
                "provincia_id": 38
              },
              {
                "id": 385,
                "distrito": "CHOCO",
                "provincia_id": 38
              },
              {
                "id": 386,
                "distrito": "HUANCARQUI",
                "provincia_id": 38
              },
              {
                "id": 387,
                "distrito": "MACHAGUAY",
                "provincia_id": 38
              },
              {
                "id": 388,
                "distrito": "ORCOPAMPA",
                "provincia_id": 38
              },
              {
                "id": 389,
                "distrito": "PAMPACOLCA",
                "provincia_id": 38
              },
              {
                "id": 390,
                "distrito": "TIPAN",
                "provincia_id": 38
              },
              {
                "id": 391,
                "distrito": "UÑON",
                "provincia_id": 38
              },
              {
                "id": 392,
                "distrito": "URACA",
                "provincia_id": 38
              },
              {
                "id": 393,
                "distrito": "VIRACO",
                "provincia_id": 38
              }
            ]
          },
          {
            "id": 39,
            "provincia": "CAYLLOMA",
            "departamento_id": 4,
            "distritos": [
              {
                "id": 394,
                "distrito": "CHIVAY",
                "provincia_id": 39
              },
              {
                "id": 395,
                "distrito": "ACHOMA",
                "provincia_id": 39
              },
              {
                "id": 396,
                "distrito": "CABANACONDE",
                "provincia_id": 39
              },
              {
                "id": 397,
                "distrito": "CALLALLI",
                "provincia_id": 39
              },
              {
                "id": 398,
                "distrito": "CAYLLOMA",
                "provincia_id": 39
              },
              {
                "id": 399,
                "distrito": "COPORAQUE",
                "provincia_id": 39
              },
              {
                "id": 400,
                "distrito": "HUAMBO",
                "provincia_id": 39
              },
              {
                "id": 401,
                "distrito": "HUANCA",
                "provincia_id": 39
              },
              {
                "id": 402,
                "distrito": "ICHUPAMPA",
                "provincia_id": 39
              },
              {
                "id": 403,
                "distrito": "LARI",
                "provincia_id": 39
              },
              {
                "id": 404,
                "distrito": "LLUTA",
                "provincia_id": 39
              },
              {
                "id": 405,
                "distrito": "MACA",
                "provincia_id": 39
              },
              {
                "id": 406,
                "distrito": "MADRIGAL",
                "provincia_id": 39
              },
              {
                "id": 407,
                "distrito": "SAN ANTONIO DE CHUCA",
                "provincia_id": 39
              },
              {
                "id": 408,
                "distrito": "SIBAYO",
                "provincia_id": 39
              },
              {
                "id": 409,
                "distrito": "TAPAY",
                "provincia_id": 39
              },
              {
                "id": 410,
                "distrito": "TISCO",
                "provincia_id": 39
              },
              {
                "id": 411,
                "distrito": "TUTI",
                "provincia_id": 39
              },
              {
                "id": 412,
                "distrito": "YANQUE",
                "provincia_id": 39
              },
              {
                "id": 413,
                "distrito": "MAJES",
                "provincia_id": 39
              }
            ]
          },
          {
            "id": 40,
            "provincia": "CONDESUYOS",
            "departamento_id": 4,
            "distritos": [
              {
                "id": 414,
                "distrito": "CHUQUIBAMBA",
                "provincia_id": 40
              },
              {
                "id": 415,
                "distrito": "ANDARAY",
                "provincia_id": 40
              },
              {
                "id": 416,
                "distrito": "CAYARANI",
                "provincia_id": 40
              },
              {
                "id": 417,
                "distrito": "CHICHAS",
                "provincia_id": 40
              },
              {
                "id": 418,
                "distrito": "IRAY",
                "provincia_id": 40
              },
              {
                "id": 419,
                "distrito": "RIO GRANDE",
                "provincia_id": 40
              },
              {
                "id": 420,
                "distrito": "SALAMANCA",
                "provincia_id": 40
              },
              {
                "id": 421,
                "distrito": "YANAQUIHUA",
                "provincia_id": 40
              }
            ]
          },
          {
            "id": 41,
            "provincia": "ISLAY",
            "departamento_id": 4,
            "distritos": [
              {
                "id": 422,
                "distrito": "MOLLENDO",
                "provincia_id": 41
              },
              {
                "id": 423,
                "distrito": "COCACHACRA",
                "provincia_id": 41
              },
              {
                "id": 424,
                "distrito": "DEAN VALDIVIA",
                "provincia_id": 41
              },
              {
                "id": 425,
                "distrito": "ISLAY",
                "provincia_id": 41
              },
              {
                "id": 426,
                "distrito": "MEJIA",
                "provincia_id": 41
              },
              {
                "id": 427,
                "distrito": "PUNTA DE BOMBON",
                "provincia_id": 41
              }
            ]
          },
          {
            "id": 42,
            "provincia": "LA UNION",
            "departamento_id": 4,
            "distritos": [
              {
                "id": 428,
                "distrito": "COTAHUASI",
                "provincia_id": 42
              },
              {
                "id": 429,
                "distrito": "ALCA",
                "provincia_id": 42
              },
              {
                "id": 430,
                "distrito": "CHARCANA",
                "provincia_id": 42
              },
              {
                "id": 431,
                "distrito": "HUAYNACOTAS",
                "provincia_id": 42
              },
              {
                "id": 432,
                "distrito": "PAMPAMARCA",
                "provincia_id": 42
              },
              {
                "id": 433,
                "distrito": "PUYCA",
                "provincia_id": 42
              },
              {
                "id": 434,
                "distrito": "QUECHUALLA",
                "provincia_id": 42
              },
              {
                "id": 435,
                "distrito": "SAYLA",
                "provincia_id": 42
              },
              {
                "id": 436,
                "distrito": "TAURIA",
                "provincia_id": 42
              },
              {
                "id": 437,
                "distrito": "TOMEPAMPA",
                "provincia_id": 42
              },
              {
                "id": 438,
                "distrito": "TORO",
                "provincia_id": 42
              }
            ]
          }
        ]
      },
      {
        "id": 5,
        "departamento": "AYACUCHO",
        "provincias": [
          {
            "id": 43,
            "provincia": "HUAMANGA",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 439,
                "distrito": "AYACUCHO",
                "provincia_id": 43
              },
              {
                "id": 440,
                "distrito": "ACOCRO",
                "provincia_id": 43
              },
              {
                "id": 441,
                "distrito": "ACOS VINCHOS",
                "provincia_id": 43
              },
              {
                "id": 442,
                "distrito": "CARMEN ALTO",
                "provincia_id": 43
              },
              {
                "id": 443,
                "distrito": "CHIARA",
                "provincia_id": 43
              },
              {
                "id": 444,
                "distrito": "OCROS",
                "provincia_id": 43
              },
              {
                "id": 445,
                "distrito": "PACAYCASA",
                "provincia_id": 43
              },
              {
                "id": 446,
                "distrito": "QUINUA",
                "provincia_id": 43
              },
              {
                "id": 447,
                "distrito": "SAN JOSE DE TICLLAS",
                "provincia_id": 43
              },
              {
                "id": 448,
                "distrito": "SAN JUAN BAUTISTA",
                "provincia_id": 43
              },
              {
                "id": 449,
                "distrito": "SANTIAGO DE PISCHA",
                "provincia_id": 43
              },
              {
                "id": 450,
                "distrito": "SOCOS",
                "provincia_id": 43
              },
              {
                "id": 451,
                "distrito": "TAMBILLO",
                "provincia_id": 43
              },
              {
                "id": 452,
                "distrito": "VINCHOS",
                "provincia_id": 43
              },
              {
                "id": 453,
                "distrito": "JESUS NAZARENO",
                "provincia_id": 43
              }
            ]
          },
          {
            "id": 44,
            "provincia": "CANGALLO",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 454,
                "distrito": "CANGALLO",
                "provincia_id": 44
              },
              {
                "id": 455,
                "distrito": "CHUSCHI",
                "provincia_id": 44
              },
              {
                "id": 456,
                "distrito": "LOS MOROCHUCOS",
                "provincia_id": 44
              },
              {
                "id": 457,
                "distrito": "MARIA PARADO DE BELLIDO",
                "provincia_id": 44
              },
              {
                "id": 458,
                "distrito": "PARAS",
                "provincia_id": 44
              },
              {
                "id": 459,
                "distrito": "TOTOS",
                "provincia_id": 44
              }
            ]
          },
          {
            "id": 45,
            "provincia": "HUANCA SANCOS",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 460,
                "distrito": "SANCOS",
                "provincia_id": 45
              },
              {
                "id": 461,
                "distrito": "CARAPO",
                "provincia_id": 45
              },
              {
                "id": 462,
                "distrito": "SACSAMARCA",
                "provincia_id": 45
              },
              {
                "id": 463,
                "distrito": "SANTIAGO DE LUCANAMARCA",
                "provincia_id": 45
              }
            ]
          },
          {
            "id": 46,
            "provincia": "HUANTA",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 464,
                "distrito": "HUANTA",
                "provincia_id": 46
              },
              {
                "id": 465,
                "distrito": "AYAHUANCO",
                "provincia_id": 46
              },
              {
                "id": 466,
                "distrito": "HUAMANGUILLA",
                "provincia_id": 46
              },
              {
                "id": 467,
                "distrito": "IGUAIN",
                "provincia_id": 46
              },
              {
                "id": 468,
                "distrito": "LURICOCHA",
                "provincia_id": 46
              },
              {
                "id": 469,
                "distrito": "SANTILLANA",
                "provincia_id": 46
              },
              {
                "id": 470,
                "distrito": "SIVIA",
                "provincia_id": 46
              },
              {
                "id": 471,
                "distrito": "LLOCHEGUA",
                "provincia_id": 46
              }
            ]
          },
          {
            "id": 47,
            "provincia": "LA MAR",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 472,
                "distrito": "SAN MIGUEL",
                "provincia_id": 47
              },
              {
                "id": 473,
                "distrito": "ANCO",
                "provincia_id": 47
              },
              {
                "id": 474,
                "distrito": "AYNA",
                "provincia_id": 47
              },
              {
                "id": 475,
                "distrito": "CHILCAS",
                "provincia_id": 47
              },
              {
                "id": 476,
                "distrito": "CHUNGUI",
                "provincia_id": 47
              },
              {
                "id": 477,
                "distrito": "LUIS CARRANZA",
                "provincia_id": 47
              },
              {
                "id": 478,
                "distrito": "SANTA ROSA",
                "provincia_id": 47
              },
              {
                "id": 479,
                "distrito": "TAMBO",
                "provincia_id": 47
              }
            ]
          },
          {
            "id": 48,
            "provincia": "LUCANAS",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 480,
                "distrito": "PUQUIO",
                "provincia_id": 48
              },
              {
                "id": 481,
                "distrito": "AUCARA",
                "provincia_id": 48
              },
              {
                "id": 482,
                "distrito": "CABANA",
                "provincia_id": 48
              },
              {
                "id": 483,
                "distrito": "CARMEN SALCEDO",
                "provincia_id": 48
              },
              {
                "id": 484,
                "distrito": "CHAVIÑA",
                "provincia_id": 48
              },
              {
                "id": 485,
                "distrito": "CHIPAO",
                "provincia_id": 48
              },
              {
                "id": 486,
                "distrito": "HUAC-HUAS",
                "provincia_id": 48
              },
              {
                "id": 487,
                "distrito": "LARAMATE",
                "provincia_id": 48
              },
              {
                "id": 488,
                "distrito": "LEONCIO PRADO",
                "provincia_id": 48
              },
              {
                "id": 489,
                "distrito": "LLAUTA",
                "provincia_id": 48
              },
              {
                "id": 490,
                "distrito": "LUCANAS",
                "provincia_id": 48
              },
              {
                "id": 491,
                "distrito": "OCAÑA",
                "provincia_id": 48
              },
              {
                "id": 492,
                "distrito": "OTOCA",
                "provincia_id": 48
              },
              {
                "id": 493,
                "distrito": "SAISA",
                "provincia_id": 48
              },
              {
                "id": 494,
                "distrito": "SAN CRISTOBAL",
                "provincia_id": 48
              },
              {
                "id": 495,
                "distrito": "SAN JUAN",
                "provincia_id": 48
              },
              {
                "id": 496,
                "distrito": "SAN PEDRO",
                "provincia_id": 48
              },
              {
                "id": 497,
                "distrito": "SAN PEDRO DE PALCO",
                "provincia_id": 48
              },
              {
                "id": 498,
                "distrito": "SANCOS",
                "provincia_id": 48
              },
              {
                "id": 499,
                "distrito": "SANTA ANA DE HUAYCAHUACHO",
                "provincia_id": 48
              },
              {
                "id": 500,
                "distrito": "SANTA LUCIA",
                "provincia_id": 48
              }
            ]
          },
          {
            "id": 49,
            "provincia": "PARINACOCHAS",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 501,
                "distrito": "CORACORA",
                "provincia_id": 49
              },
              {
                "id": 502,
                "distrito": "CHUMPI",
                "provincia_id": 49
              },
              {
                "id": 503,
                "distrito": "CORONEL CASTAÑEDA",
                "provincia_id": 49
              },
              {
                "id": 504,
                "distrito": "PACAPAUSA",
                "provincia_id": 49
              },
              {
                "id": 505,
                "distrito": "PULLO",
                "provincia_id": 49
              },
              {
                "id": 506,
                "distrito": "PUYUSCA",
                "provincia_id": 49
              },
              {
                "id": 507,
                "distrito": "SAN FRANCISCO DE RAVACAYCO",
                "provincia_id": 49
              },
              {
                "id": 508,
                "distrito": "UPAHUACHO",
                "provincia_id": 49
              }
            ]
          },
          {
            "id": 50,
            "provincia": "PAUCAR DEL SARA SARA",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 509,
                "distrito": "PAUSA",
                "provincia_id": 50
              },
              {
                "id": 510,
                "distrito": "COLTA",
                "provincia_id": 50
              },
              {
                "id": 511,
                "distrito": "CORCULLA",
                "provincia_id": 50
              },
              {
                "id": 512,
                "distrito": "LAMPA",
                "provincia_id": 50
              },
              {
                "id": 513,
                "distrito": "MARCABAMBA",
                "provincia_id": 50
              },
              {
                "id": 514,
                "distrito": "OYOLO",
                "provincia_id": 50
              },
              {
                "id": 515,
                "distrito": "PARARCA",
                "provincia_id": 50
              },
              {
                "id": 516,
                "distrito": "SAN JAVIER DE ALPABAMBA",
                "provincia_id": 50
              },
              {
                "id": 517,
                "distrito": "SAN JOSE DE USHUA",
                "provincia_id": 50
              },
              {
                "id": 518,
                "distrito": "SARA SARA",
                "provincia_id": 50
              }
            ]
          },
          {
            "id": 51,
            "provincia": "SUCRE",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 519,
                "distrito": "QUEROBAMBA",
                "provincia_id": 51
              },
              {
                "id": 520,
                "distrito": "BELEN",
                "provincia_id": 51
              },
              {
                "id": 521,
                "distrito": "CHALCOS",
                "provincia_id": 51
              },
              {
                "id": 522,
                "distrito": "CHILCAYOC",
                "provincia_id": 51
              },
              {
                "id": 523,
                "distrito": "HUACAÑA",
                "provincia_id": 51
              },
              {
                "id": 524,
                "distrito": "MORCOLLA",
                "provincia_id": 51
              },
              {
                "id": 525,
                "distrito": "PAICO",
                "provincia_id": 51
              },
              {
                "id": 526,
                "distrito": "SAN PEDRO DE LARCAY",
                "provincia_id": 51
              },
              {
                "id": 527,
                "distrito": "SAN SALVADOR DE QUIJE",
                "provincia_id": 51
              },
              {
                "id": 528,
                "distrito": "SANTIAGO DE PAUCARAY",
                "provincia_id": 51
              },
              {
                "id": 529,
                "distrito": "SORAS",
                "provincia_id": 51
              }
            ]
          },
          {
            "id": 52,
            "provincia": "VICTOR FAJARDO",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 530,
                "distrito": "HUANCAPI",
                "provincia_id": 52
              },
              {
                "id": 531,
                "distrito": "ALCAMENCA",
                "provincia_id": 52
              },
              {
                "id": 532,
                "distrito": "APONGO",
                "provincia_id": 52
              },
              {
                "id": 533,
                "distrito": "ASQUIPATA",
                "provincia_id": 52
              },
              {
                "id": 534,
                "distrito": "CANARIA",
                "provincia_id": 52
              },
              {
                "id": 535,
                "distrito": "CAYARA",
                "provincia_id": 52
              },
              {
                "id": 536,
                "distrito": "COLCA",
                "provincia_id": 52
              },
              {
                "id": 537,
                "distrito": "HUAMANQUIQUIA",
                "provincia_id": 52
              },
              {
                "id": 538,
                "distrito": "HUANCARAYLLA",
                "provincia_id": 52
              },
              {
                "id": 539,
                "distrito": "HUAYA",
                "provincia_id": 52
              },
              {
                "id": 540,
                "distrito": "SARHUA",
                "provincia_id": 52
              },
              {
                "id": 541,
                "distrito": "VILCANCHOS",
                "provincia_id": 52
              }
            ]
          },
          {
            "id": 53,
            "provincia": "VILCAS HUAMAN",
            "departamento_id": 5,
            "distritos": [
              {
                "id": 542,
                "distrito": "VILCAS HUAMAN",
                "provincia_id": 53
              },
              {
                "id": 543,
                "distrito": "ACCOMARCA",
                "provincia_id": 53
              },
              {
                "id": 544,
                "distrito": "CARHUANCA",
                "provincia_id": 53
              },
              {
                "id": 545,
                "distrito": "CONCEPCION",
                "provincia_id": 53
              },
              {
                "id": 546,
                "distrito": "HUAMBALPA",
                "provincia_id": 53
              },
              {
                "id": 547,
                "distrito": "INDEPENDENCIA",
                "provincia_id": 53
              },
              {
                "id": 548,
                "distrito": "SAURAMA",
                "provincia_id": 53
              },
              {
                "id": 549,
                "distrito": "VISCHONGO",
                "provincia_id": 53
              }
            ]
          }
        ]
      },
      {
        "id": 6,
        "departamento": "CAJAMARCA",
        "provincias": [
          {
            "id": 54,
            "provincia": "CAJAMARCA",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 550,
                "distrito": "CAJAMARCA",
                "provincia_id": 54
              },
              {
                "id": 551,
                "distrito": "CAJAMARCA",
                "provincia_id": 54
              },
              {
                "id": 552,
                "distrito": "ASUNCION",
                "provincia_id": 54
              },
              {
                "id": 553,
                "distrito": "CHETILLA",
                "provincia_id": 54
              },
              {
                "id": 554,
                "distrito": "COSPAN",
                "provincia_id": 54
              },
              {
                "id": 555,
                "distrito": "ENCAÑADA",
                "provincia_id": 54
              },
              {
                "id": 556,
                "distrito": "JESUS",
                "provincia_id": 54
              },
              {
                "id": 557,
                "distrito": "LLACANORA",
                "provincia_id": 54
              },
              {
                "id": 558,
                "distrito": "LOS BAÑOS DEL INCA",
                "provincia_id": 54
              },
              {
                "id": 559,
                "distrito": "MAGDALENA",
                "provincia_id": 54
              },
              {
                "id": 560,
                "distrito": "MATARA",
                "provincia_id": 54
              },
              {
                "id": 561,
                "distrito": "NAMORA",
                "provincia_id": 54
              },
              {
                "id": 562,
                "distrito": "SAN JUAN",
                "provincia_id": 54
              }
            ]
          },
          {
            "id": 55,
            "provincia": "CAJABAMBA",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 563,
                "distrito": "CAJABAMBA",
                "provincia_id": 55
              },
              {
                "id": 564,
                "distrito": "CACHACHI",
                "provincia_id": 55
              },
              {
                "id": 565,
                "distrito": "CONDEBAMBA",
                "provincia_id": 55
              },
              {
                "id": 566,
                "distrito": "SITACOCHA",
                "provincia_id": 55
              }
            ]
          },
          {
            "id": 56,
            "provincia": "CELENDIN",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 567,
                "distrito": "CELENDIN",
                "provincia_id": 56
              },
              {
                "id": 568,
                "distrito": "CHUMUCH",
                "provincia_id": 56
              },
              {
                "id": 569,
                "distrito": "CORTEGANA",
                "provincia_id": 56
              },
              {
                "id": 570,
                "distrito": "HUASMIN",
                "provincia_id": 56
              },
              {
                "id": 571,
                "distrito": "JORGE CHAVEZ",
                "provincia_id": 56
              },
              {
                "id": 572,
                "distrito": "JOSE GALVEZ",
                "provincia_id": 56
              },
              {
                "id": 573,
                "distrito": "MIGUEL IGLESIAS",
                "provincia_id": 56
              },
              {
                "id": 574,
                "distrito": "OXAMARCA",
                "provincia_id": 56
              },
              {
                "id": 575,
                "distrito": "SOROCHUCO",
                "provincia_id": 56
              },
              {
                "id": 576,
                "distrito": "SUCRE",
                "provincia_id": 56
              },
              {
                "id": 577,
                "distrito": "UTCO",
                "provincia_id": 56
              },
              {
                "id": 578,
                "distrito": "LA LIBERTAD DE PALLAN",
                "provincia_id": 56
              }
            ]
          },
          {
            "id": 57,
            "provincia": "CHOTA ",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 579,
                "distrito": "CHOTA",
                "provincia_id": 57
              },
              {
                "id": 580,
                "distrito": "ANGUIA",
                "provincia_id": 57
              },
              {
                "id": 581,
                "distrito": "CHADIN",
                "provincia_id": 57
              },
              {
                "id": 582,
                "distrito": "CHIGUIRIP",
                "provincia_id": 57
              },
              {
                "id": 583,
                "distrito": "CHIMBAN",
                "provincia_id": 57
              },
              {
                "id": 584,
                "distrito": "CHOROPAMPA",
                "provincia_id": 57
              },
              {
                "id": 585,
                "distrito": "COCHABAMBA",
                "provincia_id": 57
              },
              {
                "id": 586,
                "distrito": "CONCHAN",
                "provincia_id": 57
              },
              {
                "id": 587,
                "distrito": "HUAMBOS",
                "provincia_id": 57
              },
              {
                "id": 588,
                "distrito": "LAJAS",
                "provincia_id": 57
              },
              {
                "id": 589,
                "distrito": "LLAMA",
                "provincia_id": 57
              },
              {
                "id": 590,
                "distrito": "MIRACOSTA",
                "provincia_id": 57
              },
              {
                "id": 591,
                "distrito": "PACCHA",
                "provincia_id": 57
              },
              {
                "id": 592,
                "distrito": "PION",
                "provincia_id": 57
              },
              {
                "id": 593,
                "distrito": "QUEROCOTO",
                "provincia_id": 57
              },
              {
                "id": 594,
                "distrito": "SAN JUAN DE LICUPIS",
                "provincia_id": 57
              },
              {
                "id": 595,
                "distrito": "TACABAMBA",
                "provincia_id": 57
              },
              {
                "id": 596,
                "distrito": "TOCMOCHE",
                "provincia_id": 57
              },
              {
                "id": 597,
                "distrito": "CHALAMARCA",
                "provincia_id": 57
              }
            ]
          },
          {
            "id": 58,
            "provincia": "CONTUMAZA",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 598,
                "distrito": "CONTUMAZA",
                "provincia_id": 58
              },
              {
                "id": 599,
                "distrito": "CHILETE",
                "provincia_id": 58
              },
              {
                "id": 600,
                "distrito": "CUPISNIQUE",
                "provincia_id": 58
              },
              {
                "id": 601,
                "distrito": "GUZMANGO",
                "provincia_id": 58
              },
              {
                "id": 602,
                "distrito": "SAN BENITO",
                "provincia_id": 58
              },
              {
                "id": 603,
                "distrito": "SANTA CRUZ DE TOLED",
                "provincia_id": 58
              },
              {
                "id": 604,
                "distrito": "TANTARICA",
                "provincia_id": 58
              },
              {
                "id": 605,
                "distrito": "YONAN",
                "provincia_id": 58
              }
            ]
          },
          {
            "id": 59,
            "provincia": "CUTERVO",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 606,
                "distrito": "CUTERVO",
                "provincia_id": 59
              },
              {
                "id": 607,
                "distrito": "CALLAYUC",
                "provincia_id": 59
              },
              {
                "id": 608,
                "distrito": "CHOROS",
                "provincia_id": 59
              },
              {
                "id": 609,
                "distrito": "CUJILLO",
                "provincia_id": 59
              },
              {
                "id": 610,
                "distrito": "LA RAMADA",
                "provincia_id": 59
              },
              {
                "id": 611,
                "distrito": "PIMPINGOS",
                "provincia_id": 59
              },
              {
                "id": 612,
                "distrito": "QUEROCOTILLO",
                "provincia_id": 59
              },
              {
                "id": 613,
                "distrito": "SAN ANDRES DE CUTERVO",
                "provincia_id": 59
              },
              {
                "id": 614,
                "distrito": "SAN JUAN DE CUTERVO",
                "provincia_id": 59
              },
              {
                "id": 615,
                "distrito": "SAN LUIS DE LUCMA",
                "provincia_id": 59
              },
              {
                "id": 616,
                "distrito": "SANTA CRUZ",
                "provincia_id": 59
              },
              {
                "id": 617,
                "distrito": "SANTO DOMINGO DE LA CAPILLA",
                "provincia_id": 59
              },
              {
                "id": 618,
                "distrito": "SANTO TOMAS",
                "provincia_id": 59
              },
              {
                "id": 619,
                "distrito": "SOCOTA",
                "provincia_id": 59
              },
              {
                "id": 620,
                "distrito": "TORIBIO CASANOVA",
                "provincia_id": 59
              }
            ]
          },
          {
            "id": 60,
            "provincia": "HUALGAYOC",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 621,
                "distrito": "BAMBAMARCA",
                "provincia_id": 60
              },
              {
                "id": 622,
                "distrito": "CHUGUR",
                "provincia_id": 60
              },
              {
                "id": 623,
                "distrito": "HUALGAYOC",
                "provincia_id": 60
              }
            ]
          },
          {
            "id": 61,
            "provincia": "JAEN",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 624,
                "distrito": "JAEN",
                "provincia_id": 61
              },
              {
                "id": 625,
                "distrito": "BELLAVISTA",
                "provincia_id": 61
              },
              {
                "id": 626,
                "distrito": "CHONTALI",
                "provincia_id": 61
              },
              {
                "id": 627,
                "distrito": "COLASAY",
                "provincia_id": 61
              },
              {
                "id": 628,
                "distrito": "HUABAL",
                "provincia_id": 61
              },
              {
                "id": 629,
                "distrito": "LAS PIRIAS",
                "provincia_id": 61
              },
              {
                "id": 630,
                "distrito": "POMAHUACA",
                "provincia_id": 61
              },
              {
                "id": 631,
                "distrito": "PUCARA",
                "provincia_id": 61
              },
              {
                "id": 632,
                "distrito": "SALLIQUE",
                "provincia_id": 61
              },
              {
                "id": 633,
                "distrito": "SAN FELIPE",
                "provincia_id": 61
              },
              {
                "id": 634,
                "distrito": "SAN JOSE DEL ALTO",
                "provincia_id": 61
              },
              {
                "id": 635,
                "distrito": "SANTA ROSA",
                "provincia_id": 61
              }
            ]
          },
          {
            "id": 62,
            "provincia": "SAN IGNACIO",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 636,
                "distrito": "SAN IGNACIO",
                "provincia_id": 62
              },
              {
                "id": 637,
                "distrito": "CHIRINOS",
                "provincia_id": 62
              },
              {
                "id": 638,
                "distrito": "HUARANGO",
                "provincia_id": 62
              },
              {
                "id": 639,
                "distrito": "LA COIPA",
                "provincia_id": 62
              },
              {
                "id": 640,
                "distrito": "NAMBALLE",
                "provincia_id": 62
              },
              {
                "id": 641,
                "distrito": "SAN JOSE DE LOURDES",
                "provincia_id": 62
              },
              {
                "id": 642,
                "distrito": "TABACONAS",
                "provincia_id": 62
              }
            ]
          },
          {
            "id": 63,
            "provincia": "SAN MARCOS",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 643,
                "distrito": "PEDRO GALVEZ",
                "provincia_id": 63
              },
              {
                "id": 644,
                "distrito": "CHANCAY",
                "provincia_id": 63
              },
              {
                "id": 645,
                "distrito": "EDUARDO VILLANUEVA",
                "provincia_id": 63
              },
              {
                "id": 646,
                "distrito": "GREGORIO PITA",
                "provincia_id": 63
              },
              {
                "id": 647,
                "distrito": "ICHOCAN",
                "provincia_id": 63
              },
              {
                "id": 648,
                "distrito": "JOSE MANUEL QUIROZ",
                "provincia_id": 63
              },
              {
                "id": 649,
                "distrito": "JOSE SABOGAL",
                "provincia_id": 63
              }
            ]
          },
          {
            "id": 64,
            "provincia": "SAN PABLO",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 650,
                "distrito": "SAN MIGUEL",
                "provincia_id": 64
              },
              {
                "id": 651,
                "distrito": "SAN MIGUEL",
                "provincia_id": 64
              },
              {
                "id": 652,
                "distrito": "BOLIVAR",
                "provincia_id": 64
              },
              {
                "id": 653,
                "distrito": "CALQUIS",
                "provincia_id": 64
              },
              {
                "id": 654,
                "distrito": "CATILLUC",
                "provincia_id": 64
              },
              {
                "id": 655,
                "distrito": "EL PRADO",
                "provincia_id": 64
              },
              {
                "id": 656,
                "distrito": "LA FLORIDA",
                "provincia_id": 64
              },
              {
                "id": 657,
                "distrito": "LLAPA",
                "provincia_id": 64
              },
              {
                "id": 658,
                "distrito": "NANCHOC",
                "provincia_id": 64
              },
              {
                "id": 659,
                "distrito": "NIEPOS",
                "provincia_id": 64
              },
              {
                "id": 660,
                "distrito": "SAN GREGORIO",
                "provincia_id": 64
              },
              {
                "id": 661,
                "distrito": "SAN SILVESTRE DE COCHAN",
                "provincia_id": 64
              },
              {
                "id": 662,
                "distrito": "TONGOD",
                "provincia_id": 64
              },
              {
                "id": 663,
                "distrito": "UNION AGUA BLANCA",
                "provincia_id": 64
              }
            ]
          },
          {
            "id": 65,
            "provincia": "SANTA CRUZ",
            "departamento_id": 6,
            "distritos": [
              {
                "id": 664,
                "distrito": "SAN PABLO",
                "provincia_id": 65
              },
              {
                "id": 665,
                "distrito": "SAN BERNARDINO",
                "provincia_id": 65
              },
              {
                "id": 666,
                "distrito": "SAN LUIS",
                "provincia_id": 65
              },
              {
                "id": 667,
                "distrito": "TUMBADEN",
                "provincia_id": 65
              }
            ]
          }
        ]
      },
      {
        "id": 7,
        "departamento": "CALLAO",
        "provincias": [
          {
            "id": 66,
            "provincia": "CALLAO",
            "departamento_id": 7,
            "distritos": [
              {
                "id": 668,
                "distrito": "SANTA CRUZ",
                "provincia_id": 66
              },
              {
                "id": 669,
                "distrito": "ANDABAMBA",
                "provincia_id": 66
              },
              {
                "id": 670,
                "distrito": "CATACHE",
                "provincia_id": 66
              },
              {
                "id": 671,
                "distrito": "CHANCAYBAÑOS",
                "provincia_id": 66
              },
              {
                "id": 672,
                "distrito": "LA ESPERANZA",
                "provincia_id": 66
              },
              {
                "id": 673,
                "distrito": "NINABAMBA",
                "provincia_id": 66
              },
              {
                "id": 674,
                "distrito": "PULAN",
                "provincia_id": 66
              },
              {
                "id": 675,
                "distrito": "SAUCEPAMPA",
                "provincia_id": 66
              },
              {
                "id": 676,
                "distrito": "SEXI",
                "provincia_id": 66
              },
              {
                "id": 677,
                "distrito": "UTICYACU",
                "provincia_id": 66
              },
              {
                "id": 678,
                "distrito": "YAUYUCAN",
                "provincia_id": 66
              }
            ]
          }
        ]
      },
      {
        "id": 8,
        "departamento": "CUSCO",
        "provincias": [
          {
            "id": 67,
            "provincia": "CUSCO",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 679,
                "distrito": "CALLAO",
                "provincia_id": 67
              },
              {
                "id": 680,
                "distrito": "BELLAVISTA",
                "provincia_id": 67
              },
              {
                "id": 681,
                "distrito": "CARMEN DE LA LEGUA REYNOSO",
                "provincia_id": 67
              },
              {
                "id": 682,
                "distrito": "LA PERLA",
                "provincia_id": 67
              },
              {
                "id": 683,
                "distrito": "LA PUNTA",
                "provincia_id": 67
              },
              {
                "id": 684,
                "distrito": "VENTANILLA",
                "provincia_id": 67
              },
              {
                "id": 685,
                "distrito": "CUSCO",
                "provincia_id": 67
              },
              {
                "id": 686,
                "distrito": "CCORCA",
                "provincia_id": 67
              },
              {
                "id": 687,
                "distrito": "POROY",
                "provincia_id": 67
              },
              {
                "id": 688,
                "distrito": "SAN JERONIMO",
                "provincia_id": 67
              },
              {
                "id": 689,
                "distrito": "SAN SEBASTIAN",
                "provincia_id": 67
              },
              {
                "id": 690,
                "distrito": "SANTIAGO",
                "provincia_id": 67
              },
              {
                "id": 691,
                "distrito": "SAYLLA",
                "provincia_id": 67
              },
              {
                "id": 692,
                "distrito": "WANCHAQ",
                "provincia_id": 67
              }
            ]
          },
          {
            "id": 68,
            "provincia": "ACOMAYO",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 693,
                "distrito": "ACOMAYO",
                "provincia_id": 68
              },
              {
                "id": 694,
                "distrito": "ACOPIA",
                "provincia_id": 68
              },
              {
                "id": 695,
                "distrito": "ACOS",
                "provincia_id": 68
              },
              {
                "id": 696,
                "distrito": "MOSOC LLACTA",
                "provincia_id": 68
              },
              {
                "id": 697,
                "distrito": "POMACANCHI",
                "provincia_id": 68
              },
              {
                "id": 698,
                "distrito": "RONDOCAN",
                "provincia_id": 68
              },
              {
                "id": 699,
                "distrito": "SANGARARA",
                "provincia_id": 68
              }
            ]
          },
          {
            "id": 69,
            "provincia": "ANTA",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 700,
                "distrito": "ANTA",
                "provincia_id": 69
              },
              {
                "id": 701,
                "distrito": "ANCAHUASI",
                "provincia_id": 69
              },
              {
                "id": 702,
                "distrito": "CACHIMAYO",
                "provincia_id": 69
              },
              {
                "id": 703,
                "distrito": "CHINCHAYPUJIO",
                "provincia_id": 69
              },
              {
                "id": 704,
                "distrito": "HUAROCONDO",
                "provincia_id": 69
              },
              {
                "id": 705,
                "distrito": "LIMATAMBO",
                "provincia_id": 69
              },
              {
                "id": 706,
                "distrito": "MOLLEPATA",
                "provincia_id": 69
              },
              {
                "id": 707,
                "distrito": "PUCYURA",
                "provincia_id": 69
              },
              {
                "id": 708,
                "distrito": "ZURITE",
                "provincia_id": 69
              }
            ]
          },
          {
            "id": 70,
            "provincia": "CALCA",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 709,
                "distrito": "CALCA",
                "provincia_id": 70
              },
              {
                "id": 710,
                "distrito": "COYA",
                "provincia_id": 70
              },
              {
                "id": 711,
                "distrito": "LAMAY",
                "provincia_id": 70
              },
              {
                "id": 712,
                "distrito": "LARES",
                "provincia_id": 70
              },
              {
                "id": 713,
                "distrito": "PISAC",
                "provincia_id": 70
              },
              {
                "id": 714,
                "distrito": "SAN SALVADOR",
                "provincia_id": 70
              },
              {
                "id": 715,
                "distrito": "TARAY",
                "provincia_id": 70
              },
              {
                "id": 716,
                "distrito": "YANATILE",
                "provincia_id": 70
              }
            ]
          },
          {
            "id": 71,
            "provincia": "CANAS",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 717,
                "distrito": "YANAOCA",
                "provincia_id": 71
              },
              {
                "id": 718,
                "distrito": "CHECCA",
                "provincia_id": 71
              },
              {
                "id": 719,
                "distrito": "KUNTURKANKI",
                "provincia_id": 71
              },
              {
                "id": 720,
                "distrito": "LANGUI",
                "provincia_id": 71
              },
              {
                "id": 721,
                "distrito": "LAYO",
                "provincia_id": 71
              },
              {
                "id": 722,
                "distrito": "PAMPAMARCA",
                "provincia_id": 71
              },
              {
                "id": 723,
                "distrito": "QUEHUE",
                "provincia_id": 71
              },
              {
                "id": 724,
                "distrito": "TUPAC AMARU",
                "provincia_id": 71
              }
            ]
          },
          {
            "id": 72,
            "provincia": "CANCHIS",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 725,
                "distrito": "SICUANI",
                "provincia_id": 72
              },
              {
                "id": 726,
                "distrito": "CHECACUPE",
                "provincia_id": 72
              },
              {
                "id": 727,
                "distrito": "COMBAPATA",
                "provincia_id": 72
              },
              {
                "id": 728,
                "distrito": "MARANGANI",
                "provincia_id": 72
              },
              {
                "id": 729,
                "distrito": "PITUMARCA",
                "provincia_id": 72
              },
              {
                "id": 730,
                "distrito": "SAN PABLO",
                "provincia_id": 72
              },
              {
                "id": 731,
                "distrito": "SAN PEDRO",
                "provincia_id": 72
              },
              {
                "id": 732,
                "distrito": "TINTA",
                "provincia_id": 72
              }
            ]
          },
          {
            "id": 73,
            "provincia": "CHUMBIVILCAS",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 733,
                "distrito": "SANTO TOMAS",
                "provincia_id": 73
              },
              {
                "id": 734,
                "distrito": "CAPACMARCA",
                "provincia_id": 73
              },
              {
                "id": 735,
                "distrito": "CHAMACA",
                "provincia_id": 73
              },
              {
                "id": 736,
                "distrito": "COLQUEMARCA",
                "provincia_id": 73
              },
              {
                "id": 737,
                "distrito": "LIVITACA",
                "provincia_id": 73
              },
              {
                "id": 738,
                "distrito": "LLUSCO",
                "provincia_id": 73
              },
              {
                "id": 739,
                "distrito": "QUIÑOTA",
                "provincia_id": 73
              },
              {
                "id": 740,
                "distrito": "VELILLE",
                "provincia_id": 73
              }
            ]
          },
          {
            "id": 74,
            "provincia": "ESPINAR",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 741,
                "distrito": "ESPINAR",
                "provincia_id": 74
              },
              {
                "id": 742,
                "distrito": "CONDOROMA",
                "provincia_id": 74
              },
              {
                "id": 743,
                "distrito": "COPORAQUE",
                "provincia_id": 74
              },
              {
                "id": 744,
                "distrito": "OCORURO",
                "provincia_id": 74
              },
              {
                "id": 745,
                "distrito": "PALLPATA",
                "provincia_id": 74
              },
              {
                "id": 746,
                "distrito": "PICHIGUA",
                "provincia_id": 74
              },
              {
                "id": 747,
                "distrito": "SUYCKUTAMBO",
                "provincia_id": 74
              },
              {
                "id": 748,
                "distrito": "ALTO PICHIGUA",
                "provincia_id": 74
              }
            ]
          },
          {
            "id": 75,
            "provincia": "LA CONVENCION",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 749,
                "distrito": "SANTA ANA",
                "provincia_id": 75
              },
              {
                "id": 750,
                "distrito": "ECHARATE",
                "provincia_id": 75
              },
              {
                "id": 751,
                "distrito": "HUAYOPATA",
                "provincia_id": 75
              },
              {
                "id": 752,
                "distrito": "MARANURA",
                "provincia_id": 75
              },
              {
                "id": 753,
                "distrito": "OCOBAMBA",
                "provincia_id": 75
              },
              {
                "id": 754,
                "distrito": "QUELLOUNO",
                "provincia_id": 75
              },
              {
                "id": 755,
                "distrito": "KIMBIRI",
                "provincia_id": 75
              },
              {
                "id": 756,
                "distrito": "SANTA TERESA",
                "provincia_id": 75
              },
              {
                "id": 757,
                "distrito": "VILCABAMBA",
                "provincia_id": 75
              },
              {
                "id": 758,
                "distrito": "PICHARI",
                "provincia_id": 75
              }
            ]
          },
          {
            "id": 76,
            "provincia": "PARURO",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 759,
                "distrito": "PARURO",
                "provincia_id": 76
              },
              {
                "id": 760,
                "distrito": "ACCHA",
                "provincia_id": 76
              },
              {
                "id": 761,
                "distrito": "CCAPI",
                "provincia_id": 76
              },
              {
                "id": 762,
                "distrito": "COLCHA",
                "provincia_id": 76
              },
              {
                "id": 763,
                "distrito": "HUANOQUITE",
                "provincia_id": 76
              },
              {
                "id": 764,
                "distrito": "OMACHA",
                "provincia_id": 76
              },
              {
                "id": 765,
                "distrito": "PACCARITAMBO",
                "provincia_id": 76
              },
              {
                "id": 766,
                "distrito": "PILLPINTO",
                "provincia_id": 76
              },
              {
                "id": 767,
                "distrito": "YAURISQUE",
                "provincia_id": 76
              }
            ]
          },
          {
            "id": 77,
            "provincia": "PAUCARTAMBO",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 768,
                "distrito": "PAUCARTAMBO",
                "provincia_id": 77
              },
              {
                "id": 769,
                "distrito": "CAICAY",
                "provincia_id": 77
              },
              {
                "id": 770,
                "distrito": "CHALLABAMBA",
                "provincia_id": 77
              },
              {
                "id": 771,
                "distrito": "COLQUEPATA",
                "provincia_id": 77
              },
              {
                "id": 772,
                "distrito": "HUANCARANI",
                "provincia_id": 77
              },
              {
                "id": 773,
                "distrito": "KOSÑIPATA",
                "provincia_id": 77
              }
            ]
          },
          {
            "id": 78,
            "provincia": "QUISPICANCHI",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 774,
                "distrito": "URCOS",
                "provincia_id": 78
              },
              {
                "id": 775,
                "distrito": "ANDAHUAYLILLAS",
                "provincia_id": 78
              },
              {
                "id": 776,
                "distrito": "CAMANTI",
                "provincia_id": 78
              },
              {
                "id": 777,
                "distrito": "CCARHUAYO",
                "provincia_id": 78
              },
              {
                "id": 778,
                "distrito": "CCATCA",
                "provincia_id": 78
              },
              {
                "id": 779,
                "distrito": "CUSIPATA",
                "provincia_id": 78
              },
              {
                "id": 780,
                "distrito": "HUARO",
                "provincia_id": 78
              },
              {
                "id": 781,
                "distrito": "LUCRE",
                "provincia_id": 78
              },
              {
                "id": 782,
                "distrito": "MARCAPATA",
                "provincia_id": 78
              },
              {
                "id": 783,
                "distrito": "OCONGATE",
                "provincia_id": 78
              },
              {
                "id": 784,
                "distrito": "OROPESA",
                "provincia_id": 78
              },
              {
                "id": 785,
                "distrito": "QUIQUIJANA",
                "provincia_id": 78
              }
            ]
          },
          {
            "id": 79,
            "provincia": "URUBAMBA",
            "departamento_id": 8,
            "distritos": [
              {
                "id": 786,
                "distrito": "URUBAMBA",
                "provincia_id": 79
              },
              {
                "id": 787,
                "distrito": "CHINCHERO",
                "provincia_id": 79
              },
              {
                "id": 788,
                "distrito": "HUAYLLABAMBA",
                "provincia_id": 79
              },
              {
                "id": 789,
                "distrito": "MACHUPICCHU",
                "provincia_id": 79
              },
              {
                "id": 790,
                "distrito": "MARAS",
                "provincia_id": 79
              },
              {
                "id": 791,
                "distrito": "OLLANTAYTAMBO",
                "provincia_id": 79
              },
              {
                "id": 792,
                "distrito": "YUCAY",
                "provincia_id": 79
              }
            ]
          }
        ]
      },
      {
        "id": 9,
        "departamento": "HUANCAVELICA",
        "provincias": [
          {
            "id": 80,
            "provincia": "HUANCAVELICA",
            "departamento_id": 9,
            "distritos": [
              {
                "id": 793,
                "distrito": "HUANCAVELICA",
                "provincia_id": 80
              },
              {
                "id": 794,
                "distrito": "ACOBAMBILLA",
                "provincia_id": 80
              },
              {
                "id": 795,
                "distrito": "ACORIA",
                "provincia_id": 80
              },
              {
                "id": 796,
                "distrito": "CONAYCA",
                "provincia_id": 80
              },
              {
                "id": 797,
                "distrito": "CUENCA",
                "provincia_id": 80
              },
              {
                "id": 798,
                "distrito": "HUACHOCOLPA",
                "provincia_id": 80
              },
              {
                "id": 799,
                "distrito": "HUAYLLAHUARA",
                "provincia_id": 80
              },
              {
                "id": 800,
                "distrito": "IZCUCHACA",
                "provincia_id": 80
              },
              {
                "id": 801,
                "distrito": "LARIA",
                "provincia_id": 80
              },
              {
                "id": 802,
                "distrito": "MANTA",
                "provincia_id": 80
              },
              {
                "id": 803,
                "distrito": "MARISCAL CACERES",
                "provincia_id": 80
              },
              {
                "id": 804,
                "distrito": "MOYA",
                "provincia_id": 80
              },
              {
                "id": 805,
                "distrito": "NUEVO OCCORO",
                "provincia_id": 80
              },
              {
                "id": 806,
                "distrito": "PALCA",
                "provincia_id": 80
              },
              {
                "id": 807,
                "distrito": "PILCHACA",
                "provincia_id": 80
              },
              {
                "id": 808,
                "distrito": "VILCA",
                "provincia_id": 80
              },
              {
                "id": 809,
                "distrito": "YAULI",
                "provincia_id": 80
              },
              {
                "id": 810,
                "distrito": "ASCENSION",
                "provincia_id": 80
              },
              {
                "id": 811,
                "distrito": "HUANDO",
                "provincia_id": 80
              }
            ]
          },
          {
            "id": 81,
            "provincia": "ACOBAMBA",
            "departamento_id": 9,
            "distritos": [
              {
                "id": 812,
                "distrito": "ACOBAMBA",
                "provincia_id": 81
              },
              {
                "id": 813,
                "distrito": "ANDABAMBA",
                "provincia_id": 81
              },
              {
                "id": 814,
                "distrito": "ANTA",
                "provincia_id": 81
              },
              {
                "id": 815,
                "distrito": "CAJA",
                "provincia_id": 81
              },
              {
                "id": 816,
                "distrito": "MARCAS",
                "provincia_id": 81
              },
              {
                "id": 817,
                "distrito": "PAUCARA",
                "provincia_id": 81
              },
              {
                "id": 818,
                "distrito": "POMACOCHA",
                "provincia_id": 81
              },
              {
                "id": 819,
                "distrito": "ROSARIO",
                "provincia_id": 81
              }
            ]
          },
          {
            "id": 82,
            "provincia": "ANGARAES",
            "departamento_id": 9,
            "distritos": [
              {
                "id": 820,
                "distrito": "LIRCAY",
                "provincia_id": 82
              },
              {
                "id": 821,
                "distrito": "ANCHONGA",
                "provincia_id": 82
              },
              {
                "id": 822,
                "distrito": "CALLANMARCA",
                "provincia_id": 82
              },
              {
                "id": 823,
                "distrito": "CCOCHACCASA",
                "provincia_id": 82
              },
              {
                "id": 824,
                "distrito": "CHINCHO",
                "provincia_id": 82
              },
              {
                "id": 825,
                "distrito": "CONGALLA",
                "provincia_id": 82
              },
              {
                "id": 826,
                "distrito": "HUANCA-HUANCA",
                "provincia_id": 82
              },
              {
                "id": 827,
                "distrito": "HUAYLLAY GRANDE",
                "provincia_id": 82
              },
              {
                "id": 828,
                "distrito": "JULCAMARCA",
                "provincia_id": 82
              },
              {
                "id": 829,
                "distrito": "SAN ANTONIO DE ANTAPARCO",
                "provincia_id": 82
              },
              {
                "id": 830,
                "distrito": "SANTO TOMAS DE PATA",
                "provincia_id": 82
              },
              {
                "id": 831,
                "distrito": "SECCLLA",
                "provincia_id": 82
              }
            ]
          },
          {
            "id": 83,
            "provincia": "CASTROVIRREYNA",
            "departamento_id": 9,
            "distritos": [
              {
                "id": 832,
                "distrito": "CASTROVIRREYNA",
                "provincia_id": 83
              },
              {
                "id": 833,
                "distrito": "ARMA",
                "provincia_id": 83
              },
              {
                "id": 834,
                "distrito": "AURAHUA",
                "provincia_id": 83
              },
              {
                "id": 835,
                "distrito": "CAPILLAS",
                "provincia_id": 83
              },
              {
                "id": 836,
                "distrito": "CHUPAMARCA",
                "provincia_id": 83
              },
              {
                "id": 837,
                "distrito": "COCAS",
                "provincia_id": 83
              },
              {
                "id": 838,
                "distrito": "HUACHOS",
                "provincia_id": 83
              },
              {
                "id": 839,
                "distrito": "HUAMATAMBO",
                "provincia_id": 83
              },
              {
                "id": 840,
                "distrito": "MOLLEPAMPA",
                "provincia_id": 83
              },
              {
                "id": 841,
                "distrito": "SAN JUAN",
                "provincia_id": 83
              },
              {
                "id": 842,
                "distrito": "SANTA ANA",
                "provincia_id": 83
              },
              {
                "id": 843,
                "distrito": "TANTARA",
                "provincia_id": 83
              },
              {
                "id": 844,
                "distrito": "TICRAPO",
                "provincia_id": 83
              }
            ]
          },
          {
            "id": 84,
            "provincia": "CHURCAMPA",
            "departamento_id": 9,
            "distritos": [
              {
                "id": 845,
                "distrito": "CHURCAMPA",
                "provincia_id": 84
              },
              {
                "id": 846,
                "distrito": "ANCO",
                "provincia_id": 84
              },
              {
                "id": 847,
                "distrito": "CHINCHIHUASI",
                "provincia_id": 84
              },
              {
                "id": 848,
                "distrito": "EL CARMEN",
                "provincia_id": 84
              },
              {
                "id": 849,
                "distrito": "LA MERCED",
                "provincia_id": 84
              },
              {
                "id": 850,
                "distrito": "LOCROJA",
                "provincia_id": 84
              },
              {
                "id": 851,
                "distrito": "PAUCARBAMBA",
                "provincia_id": 84
              },
              {
                "id": 852,
                "distrito": "SAN MIGUEL DE MAYOCC",
                "provincia_id": 84
              },
              {
                "id": 853,
                "distrito": "SAN PEDRO DE CORIS",
                "provincia_id": 84
              },
              {
                "id": 854,
                "distrito": "PACHAMARCA",
                "provincia_id": 84
              }
            ]
          },
          {
            "id": 85,
            "provincia": "HUAYTARA",
            "departamento_id": 9,
            "distritos": [
              {
                "id": 855,
                "distrito": "HUAYTARA",
                "provincia_id": 85
              },
              {
                "id": 856,
                "distrito": "AYAVI",
                "provincia_id": 85
              },
              {
                "id": 857,
                "distrito": "CORDOVA",
                "provincia_id": 85
              },
              {
                "id": 858,
                "distrito": "HUAYACUNDO ARMA",
                "provincia_id": 85
              },
              {
                "id": 859,
                "distrito": "LARAMARCA",
                "provincia_id": 85
              },
              {
                "id": 860,
                "distrito": "OCOYO",
                "provincia_id": 85
              },
              {
                "id": 861,
                "distrito": "PILPICHACA",
                "provincia_id": 85
              },
              {
                "id": 862,
                "distrito": "QUERCO",
                "provincia_id": 85
              },
              {
                "id": 863,
                "distrito": "QUITO-ARMA",
                "provincia_id": 85
              },
              {
                "id": 864,
                "distrito": "SAN ANTONIO DE CUSICANCHA",
                "provincia_id": 85
              },
              {
                "id": 865,
                "distrito": "SAN FRANCISCO DE SANGAYAICO",
                "provincia_id": 85
              },
              {
                "id": 866,
                "distrito": "SAN ISIDRO",
                "provincia_id": 85
              },
              {
                "id": 867,
                "distrito": "SANTIAGO DE CHOCORVOS",
                "provincia_id": 85
              },
              {
                "id": 868,
                "distrito": "SANTIAGO DE QUIRAHUARA",
                "provincia_id": 85
              },
              {
                "id": 869,
                "distrito": "SANTO DOMINGO DE CAPILLAS",
                "provincia_id": 85
              },
              {
                "id": 870,
                "distrito": "TAMBO",
                "provincia_id": 85
              }
            ]
          },
          {
            "id": 86,
            "provincia": "TAYACAJA",
            "departamento_id": 9,
            "distritos": [
              {
                "id": 871,
                "distrito": "PAMPAS",
                "provincia_id": 86
              },
              {
                "id": 872,
                "distrito": "ACOSTAMBO",
                "provincia_id": 86
              },
              {
                "id": 873,
                "distrito": "ACRAQUIA",
                "provincia_id": 86
              },
              {
                "id": 874,
                "distrito": "AHUAYCHA",
                "provincia_id": 86
              },
              {
                "id": 875,
                "distrito": "COLCABAMBA",
                "provincia_id": 86
              },
              {
                "id": 876,
                "distrito": "DANIEL HERNANDEZ",
                "provincia_id": 86
              },
              {
                "id": 877,
                "distrito": "HUACHOCOLPA",
                "provincia_id": 86
              },
              {
                "id": 878,
                "distrito": "HUARIBAMBA",
                "provincia_id": 86
              },
              {
                "id": 879,
                "distrito": "ÑAHUIMPUQUIO",
                "provincia_id": 86
              },
              {
                "id": 880,
                "distrito": "PAZOS",
                "provincia_id": 86
              },
              {
                "id": 881,
                "distrito": "QUISHUAR",
                "provincia_id": 86
              },
              {
                "id": 882,
                "distrito": "SALCABAMBA",
                "provincia_id": 86
              },
              {
                "id": 883,
                "distrito": "SALCAHUASI",
                "provincia_id": 86
              },
              {
                "id": 884,
                "distrito": "SAN MARCOS DE ROCCHAC",
                "provincia_id": 86
              },
              {
                "id": 885,
                "distrito": "SURCUBAMBA",
                "provincia_id": 86
              },
              {
                "id": 886,
                "distrito": "TINTAY PUNCU",
                "provincia_id": 86
              }
            ]
          }
        ]
      },
      {
        "id": 10,
        "departamento": "HUANUCO",
        "provincias": [
          {
            "id": 87,
            "provincia": "HUANUCO",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 887,
                "distrito": "HUANUCO",
                "provincia_id": 87
              },
              {
                "id": 888,
                "distrito": "AMARILIS",
                "provincia_id": 87
              },
              {
                "id": 889,
                "distrito": "CHINCHAO",
                "provincia_id": 87
              },
              {
                "id": 890,
                "distrito": "CHURUBAMBA",
                "provincia_id": 87
              },
              {
                "id": 891,
                "distrito": "MARGOS",
                "provincia_id": 87
              },
              {
                "id": 892,
                "distrito": "QUISQUI",
                "provincia_id": 87
              },
              {
                "id": 893,
                "distrito": "SAN FRANCISCO DE CAYRAN",
                "provincia_id": 87
              },
              {
                "id": 894,
                "distrito": "SAN PEDRO DE CHAULAN",
                "provincia_id": 87
              },
              {
                "id": 895,
                "distrito": "SANTA MARIA DEL VALLE",
                "provincia_id": 87
              },
              {
                "id": 896,
                "distrito": "YARUMAYO",
                "provincia_id": 87
              },
              {
                "id": 897,
                "distrito": "PILLCO MARCA",
                "provincia_id": 87
              }
            ]
          },
          {
            "id": 88,
            "provincia": "AMBO",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 898,
                "distrito": "AMBO",
                "provincia_id": 88
              },
              {
                "id": 899,
                "distrito": "CAYNA",
                "provincia_id": 88
              },
              {
                "id": 900,
                "distrito": "COLPAS",
                "provincia_id": 88
              },
              {
                "id": 901,
                "distrito": "CONCHAMARCA",
                "provincia_id": 88
              },
              {
                "id": 902,
                "distrito": "HUACAR",
                "provincia_id": 88
              },
              {
                "id": 903,
                "distrito": "SAN FRANCISCO",
                "provincia_id": 88
              },
              {
                "id": 904,
                "distrito": "SAN RAFAEL",
                "provincia_id": 88
              },
              {
                "id": 905,
                "distrito": "TOMAY KICHWA",
                "provincia_id": 88
              }
            ]
          },
          {
            "id": 89,
            "provincia": "DOS DE MAYO",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 906,
                "distrito": "LA UNION",
                "provincia_id": 89
              },
              {
                "id": 907,
                "distrito": "CHUQUIS",
                "provincia_id": 89
              },
              {
                "id": 908,
                "distrito": "MARIAS",
                "provincia_id": 89
              },
              {
                "id": 909,
                "distrito": "PACHAS",
                "provincia_id": 89
              },
              {
                "id": 910,
                "distrito": "QUIVILLA",
                "provincia_id": 89
              },
              {
                "id": 911,
                "distrito": "RIPAN",
                "provincia_id": 89
              },
              {
                "id": 912,
                "distrito": "SHUNQUI",
                "provincia_id": 89
              },
              {
                "id": 913,
                "distrito": "SILLAPATA",
                "provincia_id": 89
              },
              {
                "id": 914,
                "distrito": "YANAS",
                "provincia_id": 89
              }
            ]
          },
          {
            "id": 90,
            "provincia": "HUACAYBAMBA",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 915,
                "distrito": "HUACAYBAMBA",
                "provincia_id": 90
              },
              {
                "id": 916,
                "distrito": "CANCHABAMBA",
                "provincia_id": 90
              },
              {
                "id": 917,
                "distrito": "COCHABAMBA",
                "provincia_id": 90
              },
              {
                "id": 918,
                "distrito": "PINRA",
                "provincia_id": 90
              }
            ]
          },
          {
            "id": 91,
            "provincia": "HUAMALIES",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 919,
                "distrito": "LLATA",
                "provincia_id": 91
              },
              {
                "id": 920,
                "distrito": "ARANCAY",
                "provincia_id": 91
              },
              {
                "id": 921,
                "distrito": "CHAVIN DE PARIARCA",
                "provincia_id": 91
              },
              {
                "id": 922,
                "distrito": "JACAS GRANDE",
                "provincia_id": 91
              },
              {
                "id": 923,
                "distrito": "JIRCAN",
                "provincia_id": 91
              },
              {
                "id": 924,
                "distrito": "MIRAFLORES",
                "provincia_id": 91
              },
              {
                "id": 925,
                "distrito": "MONZON",
                "provincia_id": 91
              },
              {
                "id": 926,
                "distrito": "PUNCHAO",
                "provincia_id": 91
              },
              {
                "id": 927,
                "distrito": "PUÑOS",
                "provincia_id": 91
              },
              {
                "id": 928,
                "distrito": "SINGA",
                "provincia_id": 91
              },
              {
                "id": 929,
                "distrito": "TANTAMAYO",
                "provincia_id": 91
              }
            ]
          },
          {
            "id": 92,
            "provincia": "LEONCIO PRADO",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 930,
                "distrito": "RUPA-RUPA",
                "provincia_id": 92
              },
              {
                "id": 931,
                "distrito": "DANIEL ALOMIA ROBLES",
                "provincia_id": 92
              },
              {
                "id": 932,
                "distrito": "HERMILIO VALDIZAN",
                "provincia_id": 92
              },
              {
                "id": 933,
                "distrito": "JOSE CRESPO Y CASTILLO",
                "provincia_id": 92
              },
              {
                "id": 934,
                "distrito": "LUYANDO",
                "provincia_id": 92
              },
              {
                "id": 935,
                "distrito": "MARIANO DAMASO BERAUN",
                "provincia_id": 92
              }
            ]
          },
          {
            "id": 93,
            "provincia": "MARAÑON",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 936,
                "distrito": "HUACRACHUCO",
                "provincia_id": 93
              },
              {
                "id": 937,
                "distrito": "CHOLON",
                "provincia_id": 93
              },
              {
                "id": 938,
                "distrito": "SAN BUENAVENTURA",
                "provincia_id": 93
              }
            ]
          },
          {
            "id": 94,
            "provincia": "PACHITEA",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 939,
                "distrito": "PANAO",
                "provincia_id": 94
              },
              {
                "id": 940,
                "distrito": "CHAGLLA",
                "provincia_id": 94
              },
              {
                "id": 941,
                "distrito": "MOLINO",
                "provincia_id": 94
              },
              {
                "id": 942,
                "distrito": "UMARI",
                "provincia_id": 94
              }
            ]
          },
          {
            "id": 95,
            "provincia": "PUERTO INCA",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 943,
                "distrito": "PUERTO INCA",
                "provincia_id": 95
              },
              {
                "id": 944,
                "distrito": "CODO DEL POZUZO",
                "provincia_id": 95
              },
              {
                "id": 945,
                "distrito": "HONORIA",
                "provincia_id": 95
              },
              {
                "id": 946,
                "distrito": "TOURNAVISTA",
                "provincia_id": 95
              },
              {
                "id": 947,
                "distrito": "YUYAPICHIS",
                "provincia_id": 95
              }
            ]
          },
          {
            "id": 96,
            "provincia": "LAURICOCHA",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 948,
                "distrito": "JESUS",
                "provincia_id": 96
              },
              {
                "id": 949,
                "distrito": "BAÑOS",
                "provincia_id": 96
              },
              {
                "id": 950,
                "distrito": "JIVIA",
                "provincia_id": 96
              },
              {
                "id": 951,
                "distrito": "QUEROPALCA",
                "provincia_id": 96
              },
              {
                "id": 952,
                "distrito": "RONDOS",
                "provincia_id": 96
              },
              {
                "id": 953,
                "distrito": "SAN FRANCISCO DE ASIS",
                "provincia_id": 96
              },
              {
                "id": 954,
                "distrito": "SAN MIGUEL DE CAURI",
                "provincia_id": 96
              }
            ]
          },
          {
            "id": 97,
            "provincia": "YAROWILCA",
            "departamento_id": 10,
            "distritos": [
              {
                "id": 955,
                "distrito": "CHAVINILLO",
                "provincia_id": 97
              },
              {
                "id": 956,
                "distrito": "CAHUAC",
                "provincia_id": 97
              },
              {
                "id": 957,
                "distrito": "CHACABAMBA",
                "provincia_id": 97
              },
              {
                "id": 958,
                "distrito": "APARICIO POMARES",
                "provincia_id": 97
              },
              {
                "id": 959,
                "distrito": "JACAS CHICO",
                "provincia_id": 97
              },
              {
                "id": 960,
                "distrito": "OBAS",
                "provincia_id": 97
              },
              {
                "id": 961,
                "distrito": "PAMPAMARCA",
                "provincia_id": 97
              },
              {
                "id": 962,
                "distrito": "CHORAS",
                "provincia_id": 97
              }
            ]
          }
        ]
      },
      {
        "id": 11,
        "departamento": "ICA",
        "provincias": [
          {
            "id": 98,
            "provincia": "ICA",
            "departamento_id": 11,
            "distritos": [
              {
                "id": 963,
                "distrito": "ICA",
                "provincia_id": 98
              },
              {
                "id": 964,
                "distrito": "LA TINGUIÑA",
                "provincia_id": 98
              },
              {
                "id": 965,
                "distrito": "LOS AQUIJES",
                "provincia_id": 98
              },
              {
                "id": 966,
                "distrito": "OCUCAJE",
                "provincia_id": 98
              },
              {
                "id": 967,
                "distrito": "PACHACUTEC",
                "provincia_id": 98
              },
              {
                "id": 968,
                "distrito": "PARCONA",
                "provincia_id": 98
              },
              {
                "id": 969,
                "distrito": "PUEBLO NUEVO",
                "provincia_id": 98
              },
              {
                "id": 970,
                "distrito": "SALAS",
                "provincia_id": 98
              },
              {
                "id": 971,
                "distrito": "SAN JOSE DE LOS MOLINOS",
                "provincia_id": 98
              },
              {
                "id": 972,
                "distrito": "SAN JUAN BAUTISTA",
                "provincia_id": 98
              },
              {
                "id": 973,
                "distrito": "SANTIAGO",
                "provincia_id": 98
              },
              {
                "id": 974,
                "distrito": "SUBTANJALLA",
                "provincia_id": 98
              },
              {
                "id": 975,
                "distrito": "TATE",
                "provincia_id": 98
              },
              {
                "id": 976,
                "distrito": "YAUCA DEL ROSARIO",
                "provincia_id": 98
              }
            ]
          },
          {
            "id": 99,
            "provincia": "CHINCHA",
            "departamento_id": 11,
            "distritos": [
              {
                "id": 977,
                "distrito": "CHINCHA ALTA",
                "provincia_id": 99
              },
              {
                "id": 978,
                "distrito": "ALTO LARAN",
                "provincia_id": 99
              },
              {
                "id": 979,
                "distrito": "CHAVIN",
                "provincia_id": 99
              },
              {
                "id": 980,
                "distrito": "CHINCHA BAJA",
                "provincia_id": 99
              },
              {
                "id": 981,
                "distrito": "EL CARMEN",
                "provincia_id": 99
              },
              {
                "id": 982,
                "distrito": "GROCIO PRADO",
                "provincia_id": 99
              },
              {
                "id": 983,
                "distrito": "PUEBLO NUEVO",
                "provincia_id": 99
              },
              {
                "id": 984,
                "distrito": "SAN JUAN DE YANAC",
                "provincia_id": 99
              },
              {
                "id": 985,
                "distrito": "SAN PEDRO DE HUACARPANA",
                "provincia_id": 99
              },
              {
                "id": 986,
                "distrito": "SUNAMPE",
                "provincia_id": 99
              },
              {
                "id": 987,
                "distrito": "TAMBO DE MORA",
                "provincia_id": 99
              }
            ]
          },
          {
            "id": 100,
            "provincia": "NAZCA",
            "departamento_id": 11,
            "distritos": [
              {
                "id": 988,
                "distrito": "NAZCA",
                "provincia_id": 100
              },
              {
                "id": 989,
                "distrito": "CHANGUILLO",
                "provincia_id": 100
              },
              {
                "id": 990,
                "distrito": "EL INGENIO",
                "provincia_id": 100
              },
              {
                "id": 991,
                "distrito": "MARCONA",
                "provincia_id": 100
              },
              {
                "id": 992,
                "distrito": "VISTA ALEGRE",
                "provincia_id": 100
              }
            ]
          },
          {
            "id": 101,
            "provincia": "PALPA",
            "departamento_id": 11,
            "distritos": [
              {
                "id": 993,
                "distrito": "PALPA",
                "provincia_id": 101
              },
              {
                "id": 994,
                "distrito": "LLIPATA",
                "provincia_id": 101
              },
              {
                "id": 995,
                "distrito": "RIO GRANDE",
                "provincia_id": 101
              },
              {
                "id": 996,
                "distrito": "SANTA CRUZ",
                "provincia_id": 101
              },
              {
                "id": 997,
                "distrito": "TIBILLO",
                "provincia_id": 101
              }
            ]
          },
          {
            "id": 102,
            "provincia": "PISCO",
            "departamento_id": 11,
            "distritos": [
              {
                "id": 998,
                "distrito": "PISCO",
                "provincia_id": 102
              },
              {
                "id": 999,
                "distrito": "HUANCANO",
                "provincia_id": 102
              },
              {
                "id": 1000,
                "distrito": "HUMAY",
                "provincia_id": 102
              },
              {
                "id": 1001,
                "distrito": "INDEPENDENCIA",
                "provincia_id": 102
              },
              {
                "id": 1002,
                "distrito": "PARACAS",
                "provincia_id": 102
              },
              {
                "id": 1003,
                "distrito": "SAN ANDRES",
                "provincia_id": 102
              },
              {
                "id": 1004,
                "distrito": "SAN CLEMENTE",
                "provincia_id": 102
              },
              {
                "id": 1005,
                "distrito": "TUPAC AMARU INCA",
                "provincia_id": 102
              }
            ]
          }
        ]
      },
      {
        "id": 12,
        "departamento": "JUNIN",
        "provincias": [
          {
            "id": 103,
            "provincia": "HUANCAYO",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1006,
                "distrito": "HUANCAYO",
                "provincia_id": 103
              },
              {
                "id": 1007,
                "distrito": "CARHUACALLANGA",
                "provincia_id": 103
              },
              {
                "id": 1008,
                "distrito": "CHACAPAMPA",
                "provincia_id": 103
              },
              {
                "id": 1009,
                "distrito": "CHICCHE",
                "provincia_id": 103
              },
              {
                "id": 1010,
                "distrito": "CHILCA",
                "provincia_id": 103
              },
              {
                "id": 1011,
                "distrito": "CHONGOS ALTO",
                "provincia_id": 103
              },
              {
                "id": 1012,
                "distrito": "CHUPURO",
                "provincia_id": 103
              },
              {
                "id": 1013,
                "distrito": "COLCA",
                "provincia_id": 103
              },
              {
                "id": 1014,
                "distrito": "CULLHUAS",
                "provincia_id": 103
              },
              {
                "id": 1015,
                "distrito": "EL TAMBO",
                "provincia_id": 103
              },
              {
                "id": 1016,
                "distrito": "HUACRAPUQUIO",
                "provincia_id": 103
              },
              {
                "id": 1017,
                "distrito": "HUALHUAS",
                "provincia_id": 103
              },
              {
                "id": 1018,
                "distrito": "HUANCAN",
                "provincia_id": 103
              },
              {
                "id": 1019,
                "distrito": "HUASICANCHA",
                "provincia_id": 103
              },
              {
                "id": 1020,
                "distrito": "HUAYUCACHI",
                "provincia_id": 103
              },
              {
                "id": 1021,
                "distrito": "INGENIO",
                "provincia_id": 103
              },
              {
                "id": 1022,
                "distrito": "PARIAHUANCA",
                "provincia_id": 103
              },
              {
                "id": 1023,
                "distrito": "PILCOMAYO",
                "provincia_id": 103
              },
              {
                "id": 1024,
                "distrito": "PUCARA",
                "provincia_id": 103
              },
              {
                "id": 1025,
                "distrito": "QUICHUAY",
                "provincia_id": 103
              },
              {
                "id": 1026,
                "distrito": "QUILCAS",
                "provincia_id": 103
              },
              {
                "id": 1027,
                "distrito": "SAN AGUSTIN",
                "provincia_id": 103
              },
              {
                "id": 1028,
                "distrito": "SAN JERONIMO DE TUNAN",
                "provincia_id": 103
              },
              {
                "id": 1029,
                "distrito": "SAÑO",
                "provincia_id": 103
              },
              {
                "id": 1030,
                "distrito": "SAPALLANGA",
                "provincia_id": 103
              },
              {
                "id": 1031,
                "distrito": "SICAYA",
                "provincia_id": 103
              },
              {
                "id": 1032,
                "distrito": "SANTO DOMINGO DE ACOBAMBA",
                "provincia_id": 103
              },
              {
                "id": 1033,
                "distrito": "VIQUES",
                "provincia_id": 103
              }
            ]
          },
          {
            "id": 104,
            "provincia": "CONCEPCION",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1034,
                "distrito": "CONCEPCION",
                "provincia_id": 104
              },
              {
                "id": 1035,
                "distrito": "ACO",
                "provincia_id": 104
              },
              {
                "id": 1036,
                "distrito": "ANDAMARCA",
                "provincia_id": 104
              },
              {
                "id": 1037,
                "distrito": "CHAMBARA",
                "provincia_id": 104
              },
              {
                "id": 1038,
                "distrito": "COCHAS",
                "provincia_id": 104
              },
              {
                "id": 1039,
                "distrito": "COMAS",
                "provincia_id": 104
              },
              {
                "id": 1040,
                "distrito": "HEROINAS TOLEDO",
                "provincia_id": 104
              },
              {
                "id": 1041,
                "distrito": "MANZANARES",
                "provincia_id": 104
              },
              {
                "id": 1042,
                "distrito": "MARISCAL CASTILLA",
                "provincia_id": 104
              },
              {
                "id": 1043,
                "distrito": "MATAHUASI",
                "provincia_id": 104
              },
              {
                "id": 1044,
                "distrito": "MITO",
                "provincia_id": 104
              },
              {
                "id": 1045,
                "distrito": "NUEVE DE JULIO",
                "provincia_id": 104
              },
              {
                "id": 1046,
                "distrito": "ORCOTUNA",
                "provincia_id": 104
              },
              {
                "id": 1047,
                "distrito": "SAN JOSE DE QUERO",
                "provincia_id": 104
              },
              {
                "id": 1048,
                "distrito": "SANTA ROSA DE OCOPA",
                "provincia_id": 104
              }
            ]
          },
          {
            "id": 105,
            "provincia": "CHANCHAMAYO",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1049,
                "distrito": "CHANCHAMAYO",
                "provincia_id": 105
              },
              {
                "id": 1050,
                "distrito": "PERENE",
                "provincia_id": 105
              },
              {
                "id": 1051,
                "distrito": "PICHANAQUI",
                "provincia_id": 105
              },
              {
                "id": 1052,
                "distrito": "SAN LUIS DE SHUARO",
                "provincia_id": 105
              },
              {
                "id": 1053,
                "distrito": "SAN RAMON",
                "provincia_id": 105
              },
              {
                "id": 1054,
                "distrito": "VITOC",
                "provincia_id": 105
              }
            ]
          },
          {
            "id": 106,
            "provincia": "JAUJA",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1055,
                "distrito": "JAUJA",
                "provincia_id": 106
              },
              {
                "id": 1056,
                "distrito": "ACOLLA",
                "provincia_id": 106
              },
              {
                "id": 1057,
                "distrito": "APATA",
                "provincia_id": 106
              },
              {
                "id": 1058,
                "distrito": "ATAURA",
                "provincia_id": 106
              },
              {
                "id": 1059,
                "distrito": "CANCHAYLLO",
                "provincia_id": 106
              },
              {
                "id": 1060,
                "distrito": "CURICACA",
                "provincia_id": 106
              },
              {
                "id": 1061,
                "distrito": "EL MANTARO",
                "provincia_id": 106
              },
              {
                "id": 1062,
                "distrito": "HUAMALI",
                "provincia_id": 106
              },
              {
                "id": 1063,
                "distrito": "HUARIPAMPA",
                "provincia_id": 106
              },
              {
                "id": 1064,
                "distrito": "HUERTAS",
                "provincia_id": 106
              },
              {
                "id": 1065,
                "distrito": "JANJAILLO",
                "provincia_id": 106
              },
              {
                "id": 1066,
                "distrito": "JULCAN",
                "provincia_id": 106
              },
              {
                "id": 1067,
                "distrito": "LEONOR ORDOÑEZ",
                "provincia_id": 106
              },
              {
                "id": 1068,
                "distrito": "LLOCLLAPAMPA",
                "provincia_id": 106
              },
              {
                "id": 1069,
                "distrito": "MARCO",
                "provincia_id": 106
              },
              {
                "id": 1070,
                "distrito": "MASMA",
                "provincia_id": 106
              },
              {
                "id": 1071,
                "distrito": "MASMA CHICCHE",
                "provincia_id": 106
              },
              {
                "id": 1072,
                "distrito": "MOLINOS",
                "provincia_id": 106
              },
              {
                "id": 1073,
                "distrito": "MONOBAMBA",
                "provincia_id": 106
              },
              {
                "id": 1074,
                "distrito": "MUQUI",
                "provincia_id": 106
              },
              {
                "id": 1075,
                "distrito": "MUQUIYAUYO",
                "provincia_id": 106
              },
              {
                "id": 1076,
                "distrito": "PACA",
                "provincia_id": 106
              },
              {
                "id": 1077,
                "distrito": "PACCHA",
                "provincia_id": 106
              },
              {
                "id": 1078,
                "distrito": "PANCAN",
                "provincia_id": 106
              },
              {
                "id": 1079,
                "distrito": "PARCO",
                "provincia_id": 106
              },
              {
                "id": 1080,
                "distrito": "POMACANCHA",
                "provincia_id": 106
              },
              {
                "id": 1081,
                "distrito": "RICRAN",
                "provincia_id": 106
              },
              {
                "id": 1082,
                "distrito": "SAN LORENZO",
                "provincia_id": 106
              },
              {
                "id": 1083,
                "distrito": "SAN PEDRO DE CHUNAN",
                "provincia_id": 106
              },
              {
                "id": 1084,
                "distrito": "SAUSA",
                "provincia_id": 106
              },
              {
                "id": 1085,
                "distrito": "SINCOS",
                "provincia_id": 106
              },
              {
                "id": 1086,
                "distrito": "TUNAN MARCA",
                "provincia_id": 106
              },
              {
                "id": 1087,
                "distrito": "YAULI",
                "provincia_id": 106
              },
              {
                "id": 1088,
                "distrito": "YAUYOS",
                "provincia_id": 106
              }
            ]
          },
          {
            "id": 107,
            "provincia": "JUNIN",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1089,
                "distrito": "JUNIN",
                "provincia_id": 107
              },
              {
                "id": 1090,
                "distrito": "CARHUAMAYO",
                "provincia_id": 107
              },
              {
                "id": 1091,
                "distrito": "ONDORES",
                "provincia_id": 107
              },
              {
                "id": 1092,
                "distrito": "ULCUMAYO",
                "provincia_id": 107
              }
            ]
          },
          {
            "id": 108,
            "provincia": "SATIPO",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1093,
                "distrito": "SATIPO",
                "provincia_id": 108
              },
              {
                "id": 1094,
                "distrito": "COVIRIALI",
                "provincia_id": 108
              },
              {
                "id": 1095,
                "distrito": "LLAYLLA",
                "provincia_id": 108
              },
              {
                "id": 1096,
                "distrito": "MAZAMARI",
                "provincia_id": 108
              },
              {
                "id": 1097,
                "distrito": "PAMPA HERMOSA",
                "provincia_id": 108
              },
              {
                "id": 1098,
                "distrito": "PANGOA",
                "provincia_id": 108
              },
              {
                "id": 1099,
                "distrito": "RIO NEGRO",
                "provincia_id": 108
              },
              {
                "id": 1100,
                "distrito": "RIO TAMBO",
                "provincia_id": 108
              }
            ]
          },
          {
            "id": 109,
            "provincia": "TARMA",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1101,
                "distrito": "TARMA",
                "provincia_id": 109
              },
              {
                "id": 1102,
                "distrito": "ACOBAMBA",
                "provincia_id": 109
              },
              {
                "id": 1103,
                "distrito": "HUARICOLCA",
                "provincia_id": 109
              },
              {
                "id": 1104,
                "distrito": "HUASAHUASI",
                "provincia_id": 109
              },
              {
                "id": 1105,
                "distrito": "LA UNION",
                "provincia_id": 109
              },
              {
                "id": 1106,
                "distrito": "PALCA",
                "provincia_id": 109
              },
              {
                "id": 1107,
                "distrito": "PALCAMAYO",
                "provincia_id": 109
              },
              {
                "id": 1108,
                "distrito": "SAN PEDRO DE CAJAS",
                "provincia_id": 109
              },
              {
                "id": 1109,
                "distrito": "TAPO",
                "provincia_id": 109
              }
            ]
          },
          {
            "id": 110,
            "provincia": "YAULI",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1110,
                "distrito": "LA OROYA",
                "provincia_id": 110
              },
              {
                "id": 1111,
                "distrito": "CHACAPALPA",
                "provincia_id": 110
              },
              {
                "id": 1112,
                "distrito": "HUAY-HUAY",
                "provincia_id": 110
              },
              {
                "id": 1113,
                "distrito": "MARCAPOMACOCHA",
                "provincia_id": 110
              },
              {
                "id": 1114,
                "distrito": "MOROCOCHA",
                "provincia_id": 110
              },
              {
                "id": 1115,
                "distrito": "PACCHA",
                "provincia_id": 110
              },
              {
                "id": 1116,
                "distrito": "SANTA BARBARA DE CARHUACAYAN",
                "provincia_id": 110
              },
              {
                "id": 1117,
                "distrito": "SANTA ROSA DE SACCO",
                "provincia_id": 110
              },
              {
                "id": 1118,
                "distrito": "SUITUCANCHA",
                "provincia_id": 110
              },
              {
                "id": 1119,
                "distrito": "YAULI",
                "provincia_id": 110
              }
            ]
          },
          {
            "id": 111,
            "provincia": "CHUPACA",
            "departamento_id": 12,
            "distritos": [
              {
                "id": 1120,
                "distrito": "CHUPACA",
                "provincia_id": 111
              },
              {
                "id": 1121,
                "distrito": "AHUAC",
                "provincia_id": 111
              },
              {
                "id": 1122,
                "distrito": "CHONGOS BAJO",
                "provincia_id": 111
              },
              {
                "id": 1123,
                "distrito": "HUACHAC",
                "provincia_id": 111
              },
              {
                "id": 1124,
                "distrito": "HUAMANCACA CHICO",
                "provincia_id": 111
              },
              {
                "id": 1125,
                "distrito": "SAN JUAN DE ISCOS",
                "provincia_id": 111
              },
              {
                "id": 1126,
                "distrito": "SAN JUAN DE JARPA",
                "provincia_id": 111
              },
              {
                "id": 1127,
                "distrito": "TRES DE DICIEMBRE",
                "provincia_id": 111
              },
              {
                "id": 1128,
                "distrito": "YANACANCHA",
                "provincia_id": 111
              }
            ]
          }
        ]
      },
      {
        "id": 13,
        "departamento": "LA LIBERTAD",
        "provincias": [
          {
            "id": 112,
            "provincia": "TRUJILLO",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1129,
                "distrito": "TRUJILLO",
                "provincia_id": 112
              },
              {
                "id": 1130,
                "distrito": "EL PORVENIR",
                "provincia_id": 112
              },
              {
                "id": 1131,
                "distrito": "FLORENCIA DE MORA",
                "provincia_id": 112
              },
              {
                "id": 1132,
                "distrito": "HUANCHACO",
                "provincia_id": 112
              },
              {
                "id": 1133,
                "distrito": "LA ESPERANZA",
                "provincia_id": 112
              },
              {
                "id": 1134,
                "distrito": "LAREDO",
                "provincia_id": 112
              },
              {
                "id": 1135,
                "distrito": "MOCHE",
                "provincia_id": 112
              },
              {
                "id": 1136,
                "distrito": "POROTO",
                "provincia_id": 112
              },
              {
                "id": 1137,
                "distrito": "SALAVERRY",
                "provincia_id": 112
              },
              {
                "id": 1138,
                "distrito": "SIMBAL",
                "provincia_id": 112
              },
              {
                "id": 1139,
                "distrito": "VICTOR LARCO HERRERA",
                "provincia_id": 112
              }
            ]
          },
          {
            "id": 113,
            "provincia": "ASCOPE",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1140,
                "distrito": "ASCOPE",
                "provincia_id": 113
              },
              {
                "id": 1141,
                "distrito": "CHICAMA",
                "provincia_id": 113
              },
              {
                "id": 1142,
                "distrito": "CHOCOPE",
                "provincia_id": 113
              },
              {
                "id": 1143,
                "distrito": "MAGDALENA DE CAO",
                "provincia_id": 113
              },
              {
                "id": 1144,
                "distrito": "PAIJAN",
                "provincia_id": 113
              },
              {
                "id": 1145,
                "distrito": "RAZURI",
                "provincia_id": 113
              },
              {
                "id": 1146,
                "distrito": "SANTIAGO DE CAO",
                "provincia_id": 113
              },
              {
                "id": 1147,
                "distrito": "CASA GRANDE",
                "provincia_id": 113
              }
            ]
          },
          {
            "id": 114,
            "provincia": "BOLIVAR",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1148,
                "distrito": "BOLIVAR",
                "provincia_id": 114
              },
              {
                "id": 1149,
                "distrito": "BAMBAMARCA",
                "provincia_id": 114
              },
              {
                "id": 1150,
                "distrito": "CONDORMARCA",
                "provincia_id": 114
              },
              {
                "id": 1151,
                "distrito": "LONGOTEA",
                "provincia_id": 114
              },
              {
                "id": 1152,
                "distrito": "UCHUMARCA",
                "provincia_id": 114
              },
              {
                "id": 1153,
                "distrito": "UCUNCHA",
                "provincia_id": 114
              }
            ]
          },
          {
            "id": 115,
            "provincia": "CHEPEN",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1154,
                "distrito": "CHEPEN",
                "provincia_id": 115
              },
              {
                "id": 1155,
                "distrito": "PACANGA",
                "provincia_id": 115
              },
              {
                "id": 1156,
                "distrito": "PUEBLO NUEVO",
                "provincia_id": 115
              }
            ]
          },
          {
            "id": 116,
            "provincia": "JULCAN",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1157,
                "distrito": "JULCAN",
                "provincia_id": 116
              },
              {
                "id": 1158,
                "distrito": "CALAMARCA",
                "provincia_id": 116
              },
              {
                "id": 1159,
                "distrito": "CARABAMBA",
                "provincia_id": 116
              },
              {
                "id": 1160,
                "distrito": "HUASO",
                "provincia_id": 116
              }
            ]
          },
          {
            "id": 117,
            "provincia": "OTUZCO",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1161,
                "distrito": "OTUZCO",
                "provincia_id": 117
              },
              {
                "id": 1162,
                "distrito": "AGALLPAMPA",
                "provincia_id": 117
              },
              {
                "id": 1163,
                "distrito": "CHARAT",
                "provincia_id": 117
              },
              {
                "id": 1164,
                "distrito": "HUARANCHAL",
                "provincia_id": 117
              },
              {
                "id": 1165,
                "distrito": "LA CUESTA",
                "provincia_id": 117
              },
              {
                "id": 1166,
                "distrito": "MACHE",
                "provincia_id": 117
              },
              {
                "id": 1167,
                "distrito": "PARANDAY",
                "provincia_id": 117
              },
              {
                "id": 1168,
                "distrito": "SALPO",
                "provincia_id": 117
              },
              {
                "id": 1169,
                "distrito": "SINSICAP",
                "provincia_id": 117
              },
              {
                "id": 1170,
                "distrito": "USQUIL",
                "provincia_id": 117
              }
            ]
          },
          {
            "id": 118,
            "provincia": "PACASMAYO",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1171,
                "distrito": "SAN PEDRO DE LLOC",
                "provincia_id": 118
              },
              {
                "id": 1172,
                "distrito": "GUADALUPE",
                "provincia_id": 118
              },
              {
                "id": 1173,
                "distrito": "JEQUETEPEQUE",
                "provincia_id": 118
              },
              {
                "id": 1174,
                "distrito": "PACASMAYO",
                "provincia_id": 118
              },
              {
                "id": 1175,
                "distrito": "SAN JOSE",
                "provincia_id": 118
              }
            ]
          },
          {
            "id": 119,
            "provincia": "PATAZ",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1176,
                "distrito": "TAYABAMBA",
                "provincia_id": 119
              },
              {
                "id": 1177,
                "distrito": "BULDIBUYO",
                "provincia_id": 119
              },
              {
                "id": 1178,
                "distrito": "CHILLIA",
                "provincia_id": 119
              },
              {
                "id": 1179,
                "distrito": "HUANCASPATA",
                "provincia_id": 119
              },
              {
                "id": 1180,
                "distrito": "HUAYLILLAS",
                "provincia_id": 119
              },
              {
                "id": 1181,
                "distrito": "HUAYO",
                "provincia_id": 119
              },
              {
                "id": 1182,
                "distrito": "ONGON",
                "provincia_id": 119
              },
              {
                "id": 1183,
                "distrito": "PARCOY",
                "provincia_id": 119
              },
              {
                "id": 1184,
                "distrito": "PATAZ",
                "provincia_id": 119
              },
              {
                "id": 1185,
                "distrito": "PIAS",
                "provincia_id": 119
              },
              {
                "id": 1186,
                "distrito": "SANTIAGO DE CHALLAS",
                "provincia_id": 119
              },
              {
                "id": 1187,
                "distrito": "TAURIJA",
                "provincia_id": 119
              },
              {
                "id": 1188,
                "distrito": "URPAY",
                "provincia_id": 119
              }
            ]
          },
          {
            "id": 120,
            "provincia": "SANCHEZ CARRION",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1189,
                "distrito": "HUAMACHUCO",
                "provincia_id": 120
              },
              {
                "id": 1190,
                "distrito": "CHUGAY",
                "provincia_id": 120
              },
              {
                "id": 1191,
                "distrito": "COCHORCO",
                "provincia_id": 120
              },
              {
                "id": 1192,
                "distrito": "CURGOS",
                "provincia_id": 120
              },
              {
                "id": 1193,
                "distrito": "MARCABAL",
                "provincia_id": 120
              },
              {
                "id": 1194,
                "distrito": "SANAGORAN",
                "provincia_id": 120
              },
              {
                "id": 1195,
                "distrito": "SARIN",
                "provincia_id": 120
              },
              {
                "id": 1196,
                "distrito": "SARTIMBAMBA",
                "provincia_id": 120
              }
            ]
          },
          {
            "id": 121,
            "provincia": "SANTIAGO DE CHUCO",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1197,
                "distrito": "SANTIAGO DE CHUCO",
                "provincia_id": 121
              },
              {
                "id": 1198,
                "distrito": "ANGASMARCA",
                "provincia_id": 121
              },
              {
                "id": 1199,
                "distrito": "CACHICADAN",
                "provincia_id": 121
              },
              {
                "id": 1200,
                "distrito": "MOLLEBAMBA",
                "provincia_id": 121
              },
              {
                "id": 1201,
                "distrito": "MOLLEPATA",
                "provincia_id": 121
              },
              {
                "id": 1202,
                "distrito": "QUIRUVILCA",
                "provincia_id": 121
              },
              {
                "id": 1203,
                "distrito": "SANTA CRUZ DE CHUCA",
                "provincia_id": 121
              },
              {
                "id": 1204,
                "distrito": "SITABAMBA",
                "provincia_id": 121
              }
            ]
          },
          {
            "id": 122,
            "provincia": "GRAN CHIMU",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1205,
                "distrito": "GRAN CHIMU",
                "provincia_id": 122
              },
              {
                "id": 1206,
                "distrito": "CASCAS",
                "provincia_id": 122
              },
              {
                "id": 1207,
                "distrito": "LUCMA",
                "provincia_id": 122
              },
              {
                "id": 1208,
                "distrito": "MARMOT",
                "provincia_id": 122
              },
              {
                "id": 1209,
                "distrito": "SAYAPULLO",
                "provincia_id": 122
              }
            ]
          },
          {
            "id": 123,
            "provincia": "VIRU",
            "departamento_id": 13,
            "distritos": [
              {
                "id": 1210,
                "distrito": "VIRU",
                "provincia_id": 123
              },
              {
                "id": 1211,
                "distrito": "CHAO",
                "provincia_id": 123
              },
              {
                "id": 1212,
                "distrito": "GUADALUPITO",
                "provincia_id": 123
              }
            ]
          }
        ]
      },
      {
        "id": 14,
        "departamento": "LAMBAYEQUE",
        "provincias": [
          {
            "id": 124,
            "provincia": "CHICLAYO",
            "departamento_id": 14,
            "distritos": [
              {
                "id": 1213,
                "distrito": "CHICLAYO",
                "provincia_id": 124
              },
              {
                "id": 1214,
                "distrito": "CHONGOYAPE",
                "provincia_id": 124
              },
              {
                "id": 1215,
                "distrito": "ETEN",
                "provincia_id": 124
              },
              {
                "id": 1216,
                "distrito": "ETEN PUERTO",
                "provincia_id": 124
              },
              {
                "id": 1217,
                "distrito": "JOSE LEONARDO ORTIZ",
                "provincia_id": 124
              },
              {
                "id": 1218,
                "distrito": "LA VICTORIA",
                "provincia_id": 124
              },
              {
                "id": 1219,
                "distrito": "LAGUNAS",
                "provincia_id": 124
              },
              {
                "id": 1220,
                "distrito": "MONSEFU",
                "provincia_id": 124
              },
              {
                "id": 1221,
                "distrito": "NUEVA ARICA",
                "provincia_id": 124
              },
              {
                "id": 1222,
                "distrito": "OYOTUN",
                "provincia_id": 124
              },
              {
                "id": 1223,
                "distrito": "PICSI",
                "provincia_id": 124
              },
              {
                "id": 1224,
                "distrito": "PIMENTEL",
                "provincia_id": 124
              },
              {
                "id": 1225,
                "distrito": "REQUE",
                "provincia_id": 124
              },
              {
                "id": 1226,
                "distrito": "SANTA ROSA",
                "provincia_id": 124
              },
              {
                "id": 1227,
                "distrito": "SAÑA",
                "provincia_id": 124
              },
              {
                "id": 1228,
                "distrito": "CAYALTI",
                "provincia_id": 124
              },
              {
                "id": 1229,
                "distrito": "PATAPO",
                "provincia_id": 124
              },
              {
                "id": 1230,
                "distrito": "POMALCA",
                "provincia_id": 124
              },
              {
                "id": 1231,
                "distrito": "PUCALA",
                "provincia_id": 124
              },
              {
                "id": 1232,
                "distrito": "TUMAN",
                "provincia_id": 124
              }
            ]
          },
          {
            "id": 125,
            "provincia": "FERREÑAFE",
            "departamento_id": 14,
            "distritos": [
              {
                "id": 1233,
                "distrito": "FERREÑAFE",
                "provincia_id": 125
              },
              {
                "id": 1234,
                "distrito": "CAÑARIS",
                "provincia_id": 125
              },
              {
                "id": 1235,
                "distrito": "INCAHUASI",
                "provincia_id": 125
              },
              {
                "id": 1236,
                "distrito": "MANUEL ANTONIO MESONES MURO",
                "provincia_id": 125
              },
              {
                "id": 1237,
                "distrito": "PITIPO",
                "provincia_id": 125
              },
              {
                "id": 1238,
                "distrito": "PUEBLO NUEVO",
                "provincia_id": 125
              }
            ]
          },
          {
            "id": 126,
            "provincia": "LAMBAYEQUE",
            "departamento_id": 14,
            "distritos": [
              {
                "id": 1239,
                "distrito": "LAMBAYEQUE",
                "provincia_id": 126
              },
              {
                "id": 1240,
                "distrito": "CHOCHOPE",
                "provincia_id": 126
              },
              {
                "id": 1241,
                "distrito": "ILLIMO",
                "provincia_id": 126
              },
              {
                "id": 1242,
                "distrito": "JAYANCA",
                "provincia_id": 126
              },
              {
                "id": 1243,
                "distrito": "MOCHUMI",
                "provincia_id": 126
              },
              {
                "id": 1244,
                "distrito": "MORROPE",
                "provincia_id": 126
              },
              {
                "id": 1245,
                "distrito": "MOTUPE",
                "provincia_id": 126
              },
              {
                "id": 1246,
                "distrito": "OLMOS",
                "provincia_id": 126
              },
              {
                "id": 1247,
                "distrito": "PACORA",
                "provincia_id": 126
              },
              {
                "id": 1248,
                "distrito": "SALAS",
                "provincia_id": 126
              },
              {
                "id": 1249,
                "distrito": "SAN JOSE",
                "provincia_id": 126
              },
              {
                "id": 1250,
                "distrito": "TUCUME",
                "provincia_id": 126
              }
            ]
          }
        ]
      },
      {
        "id": 15,
        "departamento": "LIMA",
        "provincias": [
          {
            "id": 127,
            "provincia": "LIMA",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1251,
                "distrito": "LIMA",
                "provincia_id": 127
              },
              {
                "id": 1252,
                "distrito": "ANCON",
                "provincia_id": 127
              },
              {
                "id": 1253,
                "distrito": "ATE",
                "provincia_id": 127
              },
              {
                "id": 1254,
                "distrito": "BARRANCO",
                "provincia_id": 127
              },
              {
                "id": 1255,
                "distrito": "BREÑA",
                "provincia_id": 127
              },
              {
                "id": 1256,
                "distrito": "CARABAYLLO",
                "provincia_id": 127
              },
              {
                "id": 1257,
                "distrito": "CHACLACAYO",
                "provincia_id": 127
              },
              {
                "id": 1258,
                "distrito": "CHORRILLOS",
                "provincia_id": 127
              },
              {
                "id": 1259,
                "distrito": "CIENEGUILLA",
                "provincia_id": 127
              },
              {
                "id": 1260,
                "distrito": "COMAS",
                "provincia_id": 127
              },
              {
                "id": 1261,
                "distrito": "EL AGUSTINO",
                "provincia_id": 127
              },
              {
                "id": 1262,
                "distrito": "INDEPENDENCIA",
                "provincia_id": 127
              },
              {
                "id": 1263,
                "distrito": "JESUS MARIA",
                "provincia_id": 127
              },
              {
                "id": 1264,
                "distrito": "LA MOLINA",
                "provincia_id": 127
              },
              {
                "id": 1265,
                "distrito": "LA VICTORIA",
                "provincia_id": 127
              },
              {
                "id": 1266,
                "distrito": "LINCE",
                "provincia_id": 127
              },
              {
                "id": 1267,
                "distrito": "LOS OLIVOS",
                "provincia_id": 127
              },
              {
                "id": 1268,
                "distrito": "LURIGANCHO",
                "provincia_id": 127
              },
              {
                "id": 1269,
                "distrito": "LURIN",
                "provincia_id": 127
              },
              {
                "id": 1270,
                "distrito": "MAGDALENA DEL MAR",
                "provincia_id": 127
              },
              {
                "id": 1271,
                "distrito": "MAGDALENA VIEJA",
                "provincia_id": 127
              },
              {
                "id": 1272,
                "distrito": "MIRAFLORES",
                "provincia_id": 127
              },
              {
                "id": 1273,
                "distrito": "PACHACAMAC",
                "provincia_id": 127
              },
              {
                "id": 1274,
                "distrito": "PUCUSANA",
                "provincia_id": 127
              },
              {
                "id": 1275,
                "distrito": "PUENTE PIEDRA",
                "provincia_id": 127
              },
              {
                "id": 1276,
                "distrito": "PUNTA HERMOSA",
                "provincia_id": 127
              },
              {
                "id": 1277,
                "distrito": "PUNTA NEGRA",
                "provincia_id": 127
              },
              {
                "id": 1278,
                "distrito": "RIMAC",
                "provincia_id": 127
              },
              {
                "id": 1279,
                "distrito": "SAN BARTOLO",
                "provincia_id": 127
              },
              {
                "id": 1280,
                "distrito": "SAN BORJA",
                "provincia_id": 127
              },
              {
                "id": 1281,
                "distrito": "SAN ISIDRO",
                "provincia_id": 127
              },
              {
                "id": 1282,
                "distrito": "SAN JUAN DE LURIGANCHO",
                "provincia_id": 127
              },
              {
                "id": 1283,
                "distrito": "SAN JUAN DE MIRAFLORES",
                "provincia_id": 127
              },
              {
                "id": 1284,
                "distrito": "SAN LUIS",
                "provincia_id": 127
              },
              {
                "id": 1285,
                "distrito": "SAN MARTIN DE PORRES",
                "provincia_id": 127
              },
              {
                "id": 1286,
                "distrito": "SAN MIGUEL",
                "provincia_id": 127
              },
              {
                "id": 1287,
                "distrito": "SANTA ANITA",
                "provincia_id": 127
              },
              {
                "id": 1288,
                "distrito": "SANTA MARIA DEL MAR",
                "provincia_id": 127
              },
              {
                "id": 1289,
                "distrito": "SANTA ROSA",
                "provincia_id": 127
              },
              {
                "id": 1290,
                "distrito": "SANTIAGO DE SURCO",
                "provincia_id": 127
              },
              {
                "id": 1291,
                "distrito": "SURQUILLO",
                "provincia_id": 127
              },
              {
                "id": 1292,
                "distrito": "VILLA EL SALVADOR",
                "provincia_id": 127
              },
              {
                "id": 1293,
                "distrito": "VILLA MARIA DEL TRIUNFO",
                "provincia_id": 127
              }
            ]
          },
          {
            "id": 128,
            "provincia": "BARRANCA",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1294,
                "distrito": "BARRANCA",
                "provincia_id": 128
              },
              {
                "id": 1295,
                "distrito": "PARAMONGA",
                "provincia_id": 128
              },
              {
                "id": 1296,
                "distrito": "PATIVILCA",
                "provincia_id": 128
              },
              {
                "id": 1297,
                "distrito": "SUPE",
                "provincia_id": 128
              },
              {
                "id": 1298,
                "distrito": "SUPE PUERTO",
                "provincia_id": 128
              }
            ]
          },
          {
            "id": 129,
            "provincia": "CAJATAMBO",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1299,
                "distrito": "CAJATAMBO",
                "provincia_id": 129
              },
              {
                "id": 1300,
                "distrito": "COPA",
                "provincia_id": 129
              },
              {
                "id": 1301,
                "distrito": "GORGOR",
                "provincia_id": 129
              },
              {
                "id": 1302,
                "distrito": "HUANCAPON",
                "provincia_id": 129
              },
              {
                "id": 1303,
                "distrito": "MANAS",
                "provincia_id": 129
              }
            ]
          },
          {
            "id": 130,
            "provincia": "CANTA",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1304,
                "distrito": "CANTA",
                "provincia_id": 130
              },
              {
                "id": 1305,
                "distrito": "ARAHUAY",
                "provincia_id": 130
              },
              {
                "id": 1306,
                "distrito": "HUAMANTANGA",
                "provincia_id": 130
              },
              {
                "id": 1307,
                "distrito": "HUAROS",
                "provincia_id": 130
              },
              {
                "id": 1308,
                "distrito": "LACHAQUI",
                "provincia_id": 130
              },
              {
                "id": 1309,
                "distrito": "SAN BUENAVENTURA",
                "provincia_id": 130
              },
              {
                "id": 1310,
                "distrito": "SANTA ROSA DE QUIVES",
                "provincia_id": 130
              }
            ]
          },
          {
            "id": 131,
            "provincia": "CAÑETE",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1311,
                "distrito": "SAN VICENTE DE CAÑETE",
                "provincia_id": 131
              },
              {
                "id": 1312,
                "distrito": "ASIA",
                "provincia_id": 131
              },
              {
                "id": 1313,
                "distrito": "CALANGO",
                "provincia_id": 131
              },
              {
                "id": 1314,
                "distrito": "CERRO AZUL",
                "provincia_id": 131
              },
              {
                "id": 1315,
                "distrito": "CHILCA",
                "provincia_id": 131
              },
              {
                "id": 1316,
                "distrito": "COAYLLO",
                "provincia_id": 131
              },
              {
                "id": 1317,
                "distrito": "IMPERIAL",
                "provincia_id": 131
              },
              {
                "id": 1318,
                "distrito": "LUNAHUANA",
                "provincia_id": 131
              },
              {
                "id": 1319,
                "distrito": "MALA",
                "provincia_id": 131
              },
              {
                "id": 1320,
                "distrito": "NUEVO IMPERIAL",
                "provincia_id": 131
              },
              {
                "id": 1321,
                "distrito": "PACARAN",
                "provincia_id": 131
              },
              {
                "id": 1322,
                "distrito": "QUILMANA",
                "provincia_id": 131
              },
              {
                "id": 1323,
                "distrito": "SAN ANTONIO",
                "provincia_id": 131
              },
              {
                "id": 1324,
                "distrito": "SAN LUIS",
                "provincia_id": 131
              },
              {
                "id": 1325,
                "distrito": "SANTA CRUZ DE FLORES",
                "provincia_id": 131
              },
              {
                "id": 1326,
                "distrito": "ZUÑIGA",
                "provincia_id": 131
              }
            ]
          },
          {
            "id": 132,
            "provincia": "HUARAL",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1327,
                "distrito": "HUARAL",
                "provincia_id": 132
              },
              {
                "id": 1328,
                "distrito": "ATAVILLOS ALTO",
                "provincia_id": 132
              },
              {
                "id": 1329,
                "distrito": "ATAVILLOS BAJO",
                "provincia_id": 132
              },
              {
                "id": 1330,
                "distrito": "AUCALLAMA",
                "provincia_id": 132
              },
              {
                "id": 1331,
                "distrito": "CHANCAY",
                "provincia_id": 132
              },
              {
                "id": 1332,
                "distrito": "IHUARI",
                "provincia_id": 132
              },
              {
                "id": 1333,
                "distrito": "LAMPIAN",
                "provincia_id": 132
              },
              {
                "id": 1334,
                "distrito": "PACARAOS",
                "provincia_id": 132
              },
              {
                "id": 1335,
                "distrito": "SAN MIGUEL DE ACOS",
                "provincia_id": 132
              },
              {
                "id": 1336,
                "distrito": "SANTA CRUZ DE ANDAMARCA",
                "provincia_id": 132
              },
              {
                "id": 1337,
                "distrito": "SUMBILCA",
                "provincia_id": 132
              },
              {
                "id": 1338,
                "distrito": "VEINTISIETE DE NOVIEMBRE",
                "provincia_id": 132
              }
            ]
          },
          {
            "id": 133,
            "provincia": "HUAROCHIRI",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1339,
                "distrito": "MATUCANA",
                "provincia_id": 133
              },
              {
                "id": 1340,
                "distrito": "ANTIOQUIA",
                "provincia_id": 133
              },
              {
                "id": 1341,
                "distrito": "CALLAHUANCA",
                "provincia_id": 133
              },
              {
                "id": 1342,
                "distrito": "CARAMPOMA",
                "provincia_id": 133
              },
              {
                "id": 1343,
                "distrito": "CHICLA",
                "provincia_id": 133
              },
              {
                "id": 1344,
                "distrito": "CUENCA",
                "provincia_id": 133
              },
              {
                "id": 1345,
                "distrito": "HUACHUPAMPA",
                "provincia_id": 133
              },
              {
                "id": 1346,
                "distrito": "HUANZA",
                "provincia_id": 133
              },
              {
                "id": 1347,
                "distrito": "HUAROCHIRI",
                "provincia_id": 133
              },
              {
                "id": 1348,
                "distrito": "LAHUAYTAMBO",
                "provincia_id": 133
              },
              {
                "id": 1349,
                "distrito": "LANGA",
                "provincia_id": 133
              },
              {
                "id": 1350,
                "distrito": "LARAOS",
                "provincia_id": 133
              },
              {
                "id": 1351,
                "distrito": "MARIATANA",
                "provincia_id": 133
              },
              {
                "id": 1352,
                "distrito": "RICARDO PALMA",
                "provincia_id": 133
              },
              {
                "id": 1353,
                "distrito": "SAN ANDRES DE TUPICOCHA",
                "provincia_id": 133
              },
              {
                "id": 1354,
                "distrito": "SAN ANTONIO",
                "provincia_id": 133
              },
              {
                "id": 1355,
                "distrito": "SAN BARTOLOME",
                "provincia_id": 133
              },
              {
                "id": 1356,
                "distrito": "SAN DAMIAN",
                "provincia_id": 133
              },
              {
                "id": 1357,
                "distrito": "SAN JUAN DE IRIS",
                "provincia_id": 133
              },
              {
                "id": 1358,
                "distrito": "SAN JUAN DE TANTARANCHE",
                "provincia_id": 133
              },
              {
                "id": 1359,
                "distrito": "SAN LORENZO DE QUINTI",
                "provincia_id": 133
              },
              {
                "id": 1360,
                "distrito": "SAN MATEO",
                "provincia_id": 133
              },
              {
                "id": 1361,
                "distrito": "SAN MATEO DE OTAO",
                "provincia_id": 133
              },
              {
                "id": 1362,
                "distrito": "SAN PEDRO DE CASTA",
                "provincia_id": 133
              },
              {
                "id": 1363,
                "distrito": "SAN PEDRO DE HUANCAYRE",
                "provincia_id": 133
              },
              {
                "id": 1364,
                "distrito": "SANGALLAYA",
                "provincia_id": 133
              },
              {
                "id": 1365,
                "distrito": "SANTA CRUZ DE COCACHACRA",
                "provincia_id": 133
              },
              {
                "id": 1366,
                "distrito": "SANTA EULALIA",
                "provincia_id": 133
              },
              {
                "id": 1367,
                "distrito": "SANTIAGO DE ANCHUCAYA",
                "provincia_id": 133
              },
              {
                "id": 1368,
                "distrito": "SANTIAGO DE TUNA",
                "provincia_id": 133
              },
              {
                "id": 1369,
                "distrito": "SANTO DOMINGO DE LOS OLLEROS",
                "provincia_id": 133
              },
              {
                "id": 1370,
                "distrito": "SURCO",
                "provincia_id": 133
              }
            ]
          },
          {
            "id": 134,
            "provincia": "HUAURA",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1371,
                "distrito": "HUACHO",
                "provincia_id": 134
              },
              {
                "id": 1372,
                "distrito": "AMBAR",
                "provincia_id": 134
              },
              {
                "id": 1373,
                "distrito": "CALETA DE CARQUIN",
                "provincia_id": 134
              },
              {
                "id": 1374,
                "distrito": "CHECRAS",
                "provincia_id": 134
              },
              {
                "id": 1375,
                "distrito": "HUALMAY",
                "provincia_id": 134
              },
              {
                "id": 1376,
                "distrito": "HUAURA",
                "provincia_id": 134
              },
              {
                "id": 1377,
                "distrito": "LEONCIO PRADO",
                "provincia_id": 134
              },
              {
                "id": 1378,
                "distrito": "PACCHO",
                "provincia_id": 134
              },
              {
                "id": 1379,
                "distrito": "SANTA LEONOR",
                "provincia_id": 134
              },
              {
                "id": 1380,
                "distrito": "SANTA MARIA",
                "provincia_id": 134
              },
              {
                "id": 1381,
                "distrito": "SAYAN",
                "provincia_id": 134
              },
              {
                "id": 1382,
                "distrito": "VEGUETA",
                "provincia_id": 134
              }
            ]
          },
          {
            "id": 135,
            "provincia": "OYON",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1383,
                "distrito": "OYON",
                "provincia_id": 135
              },
              {
                "id": 1384,
                "distrito": "ANDAJES",
                "provincia_id": 135
              },
              {
                "id": 1385,
                "distrito": "CAUJUL",
                "provincia_id": 135
              },
              {
                "id": 1386,
                "distrito": "COCHAMARCA",
                "provincia_id": 135
              },
              {
                "id": 1387,
                "distrito": "NAVAN",
                "provincia_id": 135
              },
              {
                "id": 1388,
                "distrito": "PACHANGARA",
                "provincia_id": 135
              }
            ]
          },
          {
            "id": 136,
            "provincia": "YAUYOS",
            "departamento_id": 15,
            "distritos": [
              {
                "id": 1389,
                "distrito": "YAUYOS",
                "provincia_id": 136
              },
              {
                "id": 1390,
                "distrito": "ALIS",
                "provincia_id": 136
              },
              {
                "id": 1391,
                "distrito": "AYAUCA",
                "provincia_id": 136
              },
              {
                "id": 1392,
                "distrito": "AYAVIRI",
                "provincia_id": 136
              },
              {
                "id": 1393,
                "distrito": "AZANGARO",
                "provincia_id": 136
              },
              {
                "id": 1394,
                "distrito": "CACRA",
                "provincia_id": 136
              },
              {
                "id": 1395,
                "distrito": "CARANIA",
                "provincia_id": 136
              },
              {
                "id": 1396,
                "distrito": "CATAHUASI",
                "provincia_id": 136
              },
              {
                "id": 1397,
                "distrito": "CHOCOS",
                "provincia_id": 136
              },
              {
                "id": 1398,
                "distrito": "COCHAS",
                "provincia_id": 136
              },
              {
                "id": 1399,
                "distrito": "COLONIA",
                "provincia_id": 136
              },
              {
                "id": 1400,
                "distrito": "HONGOS",
                "provincia_id": 136
              },
              {
                "id": 1401,
                "distrito": "HUAMPARA",
                "provincia_id": 136
              },
              {
                "id": 1402,
                "distrito": "HUANCAYA",
                "provincia_id": 136
              },
              {
                "id": 1403,
                "distrito": "HUANGASCAR",
                "provincia_id": 136
              },
              {
                "id": 1404,
                "distrito": "HUANTAN",
                "provincia_id": 136
              },
              {
                "id": 1405,
                "distrito": "HUAÑEC",
                "provincia_id": 136
              },
              {
                "id": 1406,
                "distrito": "LARAOS",
                "provincia_id": 136
              },
              {
                "id": 1407,
                "distrito": "LINCHA",
                "provincia_id": 136
              },
              {
                "id": 1408,
                "distrito": "MADEAN",
                "provincia_id": 136
              },
              {
                "id": 1409,
                "distrito": "MIRAFLORES",
                "provincia_id": 136
              },
              {
                "id": 1410,
                "distrito": "OMAS",
                "provincia_id": 136
              },
              {
                "id": 1411,
                "distrito": "PUTINZA",
                "provincia_id": 136
              },
              {
                "id": 1412,
                "distrito": "QUINCHES",
                "provincia_id": 136
              },
              {
                "id": 1413,
                "distrito": "QUINOCAY",
                "provincia_id": 136
              },
              {
                "id": 1414,
                "distrito": "SAN JOAQUIN",
                "provincia_id": 136
              },
              {
                "id": 1415,
                "distrito": "SAN PEDRO DE PILAS",
                "provincia_id": 136
              },
              {
                "id": 1416,
                "distrito": "TANTA",
                "provincia_id": 136
              },
              {
                "id": 1417,
                "distrito": "TAURIPAMPA",
                "provincia_id": 136
              },
              {
                "id": 1418,
                "distrito": "TOMAS",
                "provincia_id": 136
              },
              {
                "id": 1419,
                "distrito": "TUPE",
                "provincia_id": 136
              },
              {
                "id": 1420,
                "distrito": "VIÑAC",
                "provincia_id": 136
              },
              {
                "id": 1421,
                "distrito": "VITIS",
                "provincia_id": 136
              }
            ]
          }
        ]
      },
      {
        "id": 16,
        "departamento": "LORETO",
        "provincias": [
          {
            "id": 137,
            "provincia": "MAYNAS",
            "departamento_id": 16,
            "distritos": [
              {
                "id": 1422,
                "distrito": "IQUITOS",
                "provincia_id": 137
              },
              {
                "id": 1423,
                "distrito": "ALTO NANAY",
                "provincia_id": 137
              },
              {
                "id": 1424,
                "distrito": "FERNANDO LORES",
                "provincia_id": 137
              },
              {
                "id": 1425,
                "distrito": "INDIANA",
                "provincia_id": 137
              },
              {
                "id": 1426,
                "distrito": "LAS AMAZONAS",
                "provincia_id": 137
              },
              {
                "id": 1427,
                "distrito": "MAZAN",
                "provincia_id": 137
              },
              {
                "id": 1428,
                "distrito": "NAPO",
                "provincia_id": 137
              },
              {
                "id": 1429,
                "distrito": "PUNCHANA",
                "provincia_id": 137
              },
              {
                "id": 1430,
                "distrito": "PUTUMAYO",
                "provincia_id": 137
              },
              {
                "id": 1431,
                "distrito": "TORRES CAUSANA",
                "provincia_id": 137
              },
              {
                "id": 1432,
                "distrito": "BELEN",
                "provincia_id": 137
              },
              {
                "id": 1433,
                "distrito": "SAN JUAN BAUTISTA",
                "provincia_id": 137
              }
            ]
          },
          {
            "id": 138,
            "provincia": "ALTO AMAZONAS",
            "departamento_id": 16,
            "distritos": [
              {
                "id": 1434,
                "distrito": "YURIMAGUAS",
                "provincia_id": 138
              },
              {
                "id": 1435,
                "distrito": "BALSAPUERTO",
                "provincia_id": 138
              },
              {
                "id": 1436,
                "distrito": "BARRANCA",
                "provincia_id": 138
              },
              {
                "id": 1437,
                "distrito": "CAHUAPANAS",
                "provincia_id": 138
              },
              {
                "id": 1438,
                "distrito": "JEBEROS",
                "provincia_id": 138
              },
              {
                "id": 1439,
                "distrito": "LAGUNAS",
                "provincia_id": 138
              },
              {
                "id": 1440,
                "distrito": "MANSERICHE",
                "provincia_id": 138
              },
              {
                "id": 1441,
                "distrito": "MORONA",
                "provincia_id": 138
              },
              {
                "id": 1442,
                "distrito": "PASTAZA",
                "provincia_id": 138
              },
              {
                "id": 1443,
                "distrito": "SANTA CRUZ",
                "provincia_id": 138
              },
              {
                "id": 1444,
                "distrito": "TENIENTE CESAR LOPEZ ROJAS",
                "provincia_id": 138
              }
            ]
          },
          {
            "id": 139,
            "provincia": "LORETO",
            "departamento_id": 16,
            "distritos": [
              {
                "id": 1445,
                "distrito": "NAUTA",
                "provincia_id": 139
              },
              {
                "id": 1446,
                "distrito": "PARINARI",
                "provincia_id": 139
              },
              {
                "id": 1447,
                "distrito": "TIGRE",
                "provincia_id": 139
              },
              {
                "id": 1448,
                "distrito": "TROMPETEROS",
                "provincia_id": 139
              },
              {
                "id": 1449,
                "distrito": "URARINAS",
                "provincia_id": 139
              }
            ]
          },
          {
            "id": 140,
            "provincia": "MARISCAL RAMON CASTILLA",
            "departamento_id": 16,
            "distritos": [
              {
                "id": 1450,
                "distrito": "RAMON CASTILLA",
                "provincia_id": 140
              },
              {
                "id": 1451,
                "distrito": "PEBAS",
                "provincia_id": 140
              },
              {
                "id": 1452,
                "distrito": "YAVARI",
                "provincia_id": 140
              },
              {
                "id": 1453,
                "distrito": "SAN PABLO",
                "provincia_id": 140
              }
            ]
          },
          {
            "id": 141,
            "provincia": "REQUENA",
            "departamento_id": 16,
            "distritos": [
              {
                "id": 1454,
                "distrito": "REQUENA",
                "provincia_id": 141
              },
              {
                "id": 1455,
                "distrito": "ALTO TAPICHE",
                "provincia_id": 141
              },
              {
                "id": 1456,
                "distrito": "CAPELO",
                "provincia_id": 141
              },
              {
                "id": 1457,
                "distrito": "EMILIO SAN MARTIN",
                "provincia_id": 141
              },
              {
                "id": 1458,
                "distrito": "MAQUIA",
                "provincia_id": 141
              },
              {
                "id": 1459,
                "distrito": "PUINAHUA",
                "provincia_id": 141
              },
              {
                "id": 1460,
                "distrito": "SAQUENA",
                "provincia_id": 141
              },
              {
                "id": 1461,
                "distrito": "SOPLIN",
                "provincia_id": 141
              },
              {
                "id": 1462,
                "distrito": "TAPICHE",
                "provincia_id": 141
              },
              {
                "id": 1463,
                "distrito": "JENARO HERRERA",
                "provincia_id": 141
              },
              {
                "id": 1464,
                "distrito": "YAQUERANA",
                "provincia_id": 141
              }
            ]
          },
          {
            "id": 142,
            "provincia": "UCAYALI",
            "departamento_id": 16,
            "distritos": [
              {
                "id": 1465,
                "distrito": "CONTAMANA",
                "provincia_id": 142
              },
              {
                "id": 1466,
                "distrito": "INAHUAYA",
                "provincia_id": 142
              },
              {
                "id": 1467,
                "distrito": "PADRE MARQUEZ",
                "provincia_id": 142
              },
              {
                "id": 1468,
                "distrito": "PAMPA HERMOSA",
                "provincia_id": 142
              },
              {
                "id": 1469,
                "distrito": "SARAYACU",
                "provincia_id": 142
              },
              {
                "id": 1470,
                "distrito": "VARGAS GUERRA",
                "provincia_id": 142
              }
            ]
          }
        ]
      },
      {
        "id": 17,
        "departamento": "MADRE DE DIOS",
        "provincias": [
          {
            "id": 143,
            "provincia": "TAMBOPATA",
            "departamento_id": 17,
            "distritos": [
              {
                "id": 1471,
                "distrito": "TAMBOPATA",
                "provincia_id": 143
              },
              {
                "id": 1472,
                "distrito": "INAMBARI",
                "provincia_id": 143
              },
              {
                "id": 1473,
                "distrito": "LAS PIEDRAS",
                "provincia_id": 143
              },
              {
                "id": 1474,
                "distrito": "LABERINTO",
                "provincia_id": 143
              }
            ]
          },
          {
            "id": 144,
            "provincia": "MANU",
            "departamento_id": 17,
            "distritos": [
              {
                "id": 1475,
                "distrito": "MANU",
                "provincia_id": 144
              },
              {
                "id": 1476,
                "distrito": "FITZCARRALD",
                "provincia_id": 144
              },
              {
                "id": 1477,
                "distrito": "MADRE DE DIOS",
                "provincia_id": 144
              },
              {
                "id": 1478,
                "distrito": "HUEPETUHE",
                "provincia_id": 144
              }
            ]
          },
          {
            "id": 145,
            "provincia": "TAHUAMANU",
            "departamento_id": 17,
            "distritos": [
              {
                "id": 1479,
                "distrito": "IÑAPARI",
                "provincia_id": 145
              },
              {
                "id": 1480,
                "distrito": "IBERIA",
                "provincia_id": 145
              },
              {
                "id": 1481,
                "distrito": "TAHUAMANU",
                "provincia_id": 145
              }
            ]
          }
        ]
      },
      {
        "id": 18,
        "departamento": "MOQUEGUA",
        "provincias": [
          {
            "id": 146,
            "provincia": "MARISCAL NIETO",
            "departamento_id": 18,
            "distritos": [
              {
                "id": 1482,
                "distrito": "MOQUEGUA",
                "provincia_id": 146
              },
              {
                "id": 1483,
                "distrito": "CARUMAS",
                "provincia_id": 146
              },
              {
                "id": 1484,
                "distrito": "CUCHUMBAYA",
                "provincia_id": 146
              },
              {
                "id": 1485,
                "distrito": "SAMEGUA",
                "provincia_id": 146
              },
              {
                "id": 1486,
                "distrito": "SAN CRISTOBAL",
                "provincia_id": 146
              },
              {
                "id": 1487,
                "distrito": "TORATA",
                "provincia_id": 146
              }
            ]
          },
          {
            "id": 147,
            "provincia": "GENERAL SANCHEZ CERRO",
            "departamento_id": 18,
            "distritos": [
              {
                "id": 1488,
                "distrito": "OMATE",
                "provincia_id": 147
              },
              {
                "id": 1489,
                "distrito": "CHOJATA",
                "provincia_id": 147
              },
              {
                "id": 1490,
                "distrito": "COALAQUE",
                "provincia_id": 147
              },
              {
                "id": 1491,
                "distrito": "ICHUÑA",
                "provincia_id": 147
              },
              {
                "id": 1492,
                "distrito": "LA CAPILLA",
                "provincia_id": 147
              },
              {
                "id": 1493,
                "distrito": "LLOQUE",
                "provincia_id": 147
              },
              {
                "id": 1494,
                "distrito": "MATALAQUE",
                "provincia_id": 147
              },
              {
                "id": 1495,
                "distrito": "PUQUINA",
                "provincia_id": 147
              },
              {
                "id": 1496,
                "distrito": "QUINISTAQUILLAS",
                "provincia_id": 147
              },
              {
                "id": 1497,
                "distrito": "UBINAS",
                "provincia_id": 147
              },
              {
                "id": 1498,
                "distrito": "YUNGA",
                "provincia_id": 147
              }
            ]
          },
          {
            "id": 148,
            "provincia": "ILO",
            "departamento_id": 18,
            "distritos": [
              {
                "id": 1499,
                "distrito": "ILO",
                "provincia_id": 148
              },
              {
                "id": 1500,
                "distrito": "EL ALGARROBAL",
                "provincia_id": 148
              },
              {
                "id": 1501,
                "distrito": "PACOCHA",
                "provincia_id": 148
              }
            ]
          }
        ]
      },
      {
        "id": 19,
        "departamento": "PASCO",
        "provincias": [
          {
            "id": 149,
            "provincia": "PASCO",
            "departamento_id": 19,
            "distritos": [
              {
                "id": 1502,
                "distrito": "CHAUPIMARCA",
                "provincia_id": 149
              },
              {
                "id": 1503,
                "distrito": "HUACHON",
                "provincia_id": 149
              },
              {
                "id": 1504,
                "distrito": "HUARIACA",
                "provincia_id": 149
              },
              {
                "id": 1505,
                "distrito": "HUAYLLAY",
                "provincia_id": 149
              },
              {
                "id": 1506,
                "distrito": "NINACACA",
                "provincia_id": 149
              },
              {
                "id": 1507,
                "distrito": "PALLANCHACRA",
                "provincia_id": 149
              },
              {
                "id": 1508,
                "distrito": "PAUCARTAMBO",
                "provincia_id": 149
              },
              {
                "id": 1509,
                "distrito": "SAN FCO.DE ASIS DE YARUSYACAN",
                "provincia_id": 149
              },
              {
                "id": 1510,
                "distrito": "SIMON BOLIVAR",
                "provincia_id": 149
              },
              {
                "id": 1511,
                "distrito": "TICLACAYAN",
                "provincia_id": 149
              },
              {
                "id": 1512,
                "distrito": "TINYAHUARCO",
                "provincia_id": 149
              },
              {
                "id": 1513,
                "distrito": "VICCO",
                "provincia_id": 149
              },
              {
                "id": 1514,
                "distrito": "YANACANCHA",
                "provincia_id": 149
              }
            ]
          },
          {
            "id": 150,
            "provincia": "DANIEL ALCIDES CARRION",
            "departamento_id": 19,
            "distritos": [
              {
                "id": 1515,
                "distrito": "YANAHUANCA",
                "provincia_id": 150
              },
              {
                "id": 1516,
                "distrito": "CHACAYAN",
                "provincia_id": 150
              },
              {
                "id": 1517,
                "distrito": "GOYLLARISQUIZGA",
                "provincia_id": 150
              },
              {
                "id": 1518,
                "distrito": "PAUCAR",
                "provincia_id": 150
              },
              {
                "id": 1519,
                "distrito": "SAN PEDRO DE PILLAO",
                "provincia_id": 150
              },
              {
                "id": 1520,
                "distrito": "SANTA ANA DE TUSI",
                "provincia_id": 150
              },
              {
                "id": 1521,
                "distrito": "TAPUC",
                "provincia_id": 150
              },
              {
                "id": 1522,
                "distrito": "VILCABAMBA",
                "provincia_id": 150
              }
            ]
          },
          {
            "id": 151,
            "provincia": "OXAPAMPA",
            "departamento_id": 19,
            "distritos": [
              {
                "id": 1523,
                "distrito": "OXAPAMPA",
                "provincia_id": 151
              },
              {
                "id": 1524,
                "distrito": "CHONTABAMBA",
                "provincia_id": 151
              },
              {
                "id": 1525,
                "distrito": "HUANCABAMBA",
                "provincia_id": 151
              },
              {
                "id": 1526,
                "distrito": "PALCAZU",
                "provincia_id": 151
              },
              {
                "id": 1527,
                "distrito": "POZUZO",
                "provincia_id": 151
              },
              {
                "id": 1528,
                "distrito": "PUERTO BERMUDEZ",
                "provincia_id": 151
              },
              {
                "id": 1529,
                "distrito": "VILLA RICA",
                "provincia_id": 151
              }
            ]
          }
        ]
      },
      {
        "id": 20,
        "departamento": "PIURA",
        "provincias": [
          {
            "id": 152,
            "provincia": "PIURA",
            "departamento_id": 20,
            "distritos": [
              {
                "id": 1530,
                "distrito": "PIURA",
                "provincia_id": 152
              },
              {
                "id": 1531,
                "distrito": "CASTILLA",
                "provincia_id": 152
              },
              {
                "id": 1532,
                "distrito": "CATACAOS",
                "provincia_id": 152
              },
              {
                "id": 1533,
                "distrito": "CURA MORI",
                "provincia_id": 152
              },
              {
                "id": 1534,
                "distrito": "EL TALLAN",
                "provincia_id": 152
              },
              {
                "id": 1535,
                "distrito": "LA ARENA",
                "provincia_id": 152
              },
              {
                "id": 1536,
                "distrito": "LA UNION",
                "provincia_id": 152
              },
              {
                "id": 1537,
                "distrito": "LAS LOMAS",
                "provincia_id": 152
              },
              {
                "id": 1538,
                "distrito": "TAMBO GRANDE",
                "provincia_id": 152
              }
            ]
          },
          {
            "id": 153,
            "provincia": "AYABACA",
            "departamento_id": 20,
            "distritos": [
              {
                "id": 1539,
                "distrito": "AYABACA",
                "provincia_id": 153
              },
              {
                "id": 1540,
                "distrito": "FRIAS",
                "provincia_id": 153
              },
              {
                "id": 1541,
                "distrito": "JILILI",
                "provincia_id": 153
              },
              {
                "id": 1542,
                "distrito": "LAGUNAS",
                "provincia_id": 153
              },
              {
                "id": 1543,
                "distrito": "MONTERO",
                "provincia_id": 153
              },
              {
                "id": 1544,
                "distrito": "PACAIPAMPA",
                "provincia_id": 153
              },
              {
                "id": 1545,
                "distrito": "PAIMAS",
                "provincia_id": 153
              },
              {
                "id": 1546,
                "distrito": "SAPILLICA",
                "provincia_id": 153
              },
              {
                "id": 1547,
                "distrito": "SICCHEZ",
                "provincia_id": 153
              },
              {
                "id": 1548,
                "distrito": "SUYO",
                "provincia_id": 153
              }
            ]
          },
          {
            "id": 154,
            "provincia": "HUANCABAMBA",
            "departamento_id": 20,
            "distritos": [
              {
                "id": 1549,
                "distrito": "HUANCABAMBA",
                "provincia_id": 154
              },
              {
                "id": 1550,
                "distrito": "CANCHAQUE",
                "provincia_id": 154
              },
              {
                "id": 1551,
                "distrito": "EL CARMEN DE LA FRONTERA",
                "provincia_id": 154
              },
              {
                "id": 1552,
                "distrito": "HUARMACA",
                "provincia_id": 154
              },
              {
                "id": 1553,
                "distrito": "LALAQUIZ",
                "provincia_id": 154
              },
              {
                "id": 1554,
                "distrito": "SAN MIGUEL DE EL FAIQUE",
                "provincia_id": 154
              },
              {
                "id": 1555,
                "distrito": "SONDOR",
                "provincia_id": 154
              },
              {
                "id": 1556,
                "distrito": "SONDORILLO",
                "provincia_id": 154
              }
            ]
          },
          {
            "id": 155,
            "provincia": "MORROPON",
            "departamento_id": 20,
            "distritos": [
              {
                "id": 1557,
                "distrito": "CHULUCANAS",
                "provincia_id": 155
              },
              {
                "id": 1558,
                "distrito": "BUENOS AIRES",
                "provincia_id": 155
              },
              {
                "id": 1559,
                "distrito": "CHALACO",
                "provincia_id": 155
              },
              {
                "id": 1560,
                "distrito": "LA MATANZA",
                "provincia_id": 155
              },
              {
                "id": 1561,
                "distrito": "MORROPON",
                "provincia_id": 155
              },
              {
                "id": 1562,
                "distrito": "SALITRAL",
                "provincia_id": 155
              },
              {
                "id": 1563,
                "distrito": "SAN JUAN DE BIGOTE",
                "provincia_id": 155
              },
              {
                "id": 1564,
                "distrito": "SANTA CATALINA DE MOSSA",
                "provincia_id": 155
              },
              {
                "id": 1565,
                "distrito": "SANTO DOMINGO",
                "provincia_id": 155
              },
              {
                "id": 1566,
                "distrito": "YAMANGO",
                "provincia_id": 155
              }
            ]
          },
          {
            "id": 156,
            "provincia": "PAITA",
            "departamento_id": 20,
            "distritos": [
              {
                "id": 1567,
                "distrito": "PAITA",
                "provincia_id": 156
              },
              {
                "id": 1568,
                "distrito": "AMOTAPE",
                "provincia_id": 156
              },
              {
                "id": 1569,
                "distrito": "ARENAL",
                "provincia_id": 156
              },
              {
                "id": 1570,
                "distrito": "COLAN",
                "provincia_id": 156
              },
              {
                "id": 1571,
                "distrito": "LA HUACA",
                "provincia_id": 156
              },
              {
                "id": 1572,
                "distrito": "TAMARINDO",
                "provincia_id": 156
              },
              {
                "id": 1573,
                "distrito": "VICHAYAL",
                "provincia_id": 156
              }
            ]
          },
          {
            "id": 157,
            "provincia": "SULLANA",
            "departamento_id": 20,
            "distritos": [
              {
                "id": 1574,
                "distrito": "SULLANA",
                "provincia_id": 157
              },
              {
                "id": 1575,
                "distrito": "BELLAVISTA",
                "provincia_id": 157
              },
              {
                "id": 1576,
                "distrito": "IGNACIO ESCUDERO",
                "provincia_id": 157
              },
              {
                "id": 1577,
                "distrito": "LANCONES",
                "provincia_id": 157
              },
              {
                "id": 1578,
                "distrito": "MARCAVELICA",
                "provincia_id": 157
              },
              {
                "id": 1579,
                "distrito": "MIGUEL CHECA",
                "provincia_id": 157
              },
              {
                "id": 1580,
                "distrito": "QUERECOTILLO",
                "provincia_id": 157
              },
              {
                "id": 1581,
                "distrito": "SALITRAL",
                "provincia_id": 157
              }
            ]
          },
          {
            "id": 158,
            "provincia": "TALARA",
            "departamento_id": 20,
            "distritos": [
              {
                "id": 1582,
                "distrito": "PARIÑAS",
                "provincia_id": 158
              },
              {
                "id": 1583,
                "distrito": "EL ALTO",
                "provincia_id": 158
              },
              {
                "id": 1584,
                "distrito": "LA BREA",
                "provincia_id": 158
              },
              {
                "id": 1585,
                "distrito": "LOBITOS",
                "provincia_id": 158
              },
              {
                "id": 1586,
                "distrito": "LOS ORGANOS",
                "provincia_id": 158
              },
              {
                "id": 1587,
                "distrito": "MANCORA",
                "provincia_id": 158
              }
            ]
          },
          {
            "id": 159,
            "provincia": "SECHURA",
            "departamento_id": 20,
            "distritos": [
              {
                "id": 1588,
                "distrito": "SECHURA",
                "provincia_id": 159
              },
              {
                "id": 1589,
                "distrito": "BELLAVISTA DE LA UNION",
                "provincia_id": 159
              },
              {
                "id": 1590,
                "distrito": "BERNAL",
                "provincia_id": 159
              },
              {
                "id": 1591,
                "distrito": "CRISTO NOS VALGA",
                "provincia_id": 159
              },
              {
                "id": 1592,
                "distrito": "VICE",
                "provincia_id": 159
              },
              {
                "id": 1593,
                "distrito": "RINCONADA LLICUAR",
                "provincia_id": 159
              }
            ]
          }
        ]
      },
      {
        "id": 21,
        "departamento": "PUNO",
        "provincias": [
          {
            "id": 160,
            "provincia": "PUNO",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1594,
                "distrito": "PUNO",
                "provincia_id": 160
              },
              {
                "id": 1595,
                "distrito": "ACORA",
                "provincia_id": 160
              },
              {
                "id": 1596,
                "distrito": "AMANTANI",
                "provincia_id": 160
              },
              {
                "id": 1597,
                "distrito": "ATUNCOLLA",
                "provincia_id": 160
              },
              {
                "id": 1598,
                "distrito": "CAPACHICA",
                "provincia_id": 160
              },
              {
                "id": 1599,
                "distrito": "CHUCUITO",
                "provincia_id": 160
              },
              {
                "id": 1600,
                "distrito": "COATA",
                "provincia_id": 160
              },
              {
                "id": 1601,
                "distrito": "HUATA",
                "provincia_id": 160
              },
              {
                "id": 1602,
                "distrito": "MAÑAZO",
                "provincia_id": 160
              },
              {
                "id": 1603,
                "distrito": "PAUCARCOLLA",
                "provincia_id": 160
              },
              {
                "id": 1604,
                "distrito": "PICHACANI",
                "provincia_id": 160
              },
              {
                "id": 1605,
                "distrito": "PLATERIA",
                "provincia_id": 160
              },
              {
                "id": 1606,
                "distrito": "SAN ANTONIO",
                "provincia_id": 160
              },
              {
                "id": 1607,
                "distrito": "TIQUILLACA",
                "provincia_id": 160
              },
              {
                "id": 1608,
                "distrito": "VILQUE",
                "provincia_id": 160
              }
            ]
          },
          {
            "id": 161,
            "provincia": "AZANGARO",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1609,
                "distrito": "AZANGARO",
                "provincia_id": 161
              },
              {
                "id": 1610,
                "distrito": "ACHAYA",
                "provincia_id": 161
              },
              {
                "id": 1611,
                "distrito": "ARAPA",
                "provincia_id": 161
              },
              {
                "id": 1612,
                "distrito": "ASILLO",
                "provincia_id": 161
              },
              {
                "id": 1613,
                "distrito": "CAMINACA",
                "provincia_id": 161
              },
              {
                "id": 1614,
                "distrito": "CHUPA",
                "provincia_id": 161
              },
              {
                "id": 1615,
                "distrito": "JOSE DOMINGO CHOQUEHUANCA",
                "provincia_id": 161
              },
              {
                "id": 1616,
                "distrito": "MUÑANI",
                "provincia_id": 161
              },
              {
                "id": 1617,
                "distrito": "POTONI",
                "provincia_id": 161
              },
              {
                "id": 1618,
                "distrito": "SAMAN",
                "provincia_id": 161
              },
              {
                "id": 1619,
                "distrito": "SAN ANTON",
                "provincia_id": 161
              },
              {
                "id": 1620,
                "distrito": "SAN JOSE",
                "provincia_id": 161
              },
              {
                "id": 1621,
                "distrito": "SAN JUAN DE SALINAS",
                "provincia_id": 161
              },
              {
                "id": 1622,
                "distrito": "SANTIAGO DE PUPUJA",
                "provincia_id": 161
              },
              {
                "id": 1623,
                "distrito": "TIRAPATA",
                "provincia_id": 161
              }
            ]
          },
          {
            "id": 162,
            "provincia": "CARABAYA",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1624,
                "distrito": "MACUSANI",
                "provincia_id": 162
              },
              {
                "id": 1625,
                "distrito": "AJOYANI",
                "provincia_id": 162
              },
              {
                "id": 1626,
                "distrito": "AYAPATA",
                "provincia_id": 162
              },
              {
                "id": 1627,
                "distrito": "COASA",
                "provincia_id": 162
              },
              {
                "id": 1628,
                "distrito": "CORANI",
                "provincia_id": 162
              },
              {
                "id": 1629,
                "distrito": "CRUCERO",
                "provincia_id": 162
              },
              {
                "id": 1630,
                "distrito": "ITUATA",
                "provincia_id": 162
              },
              {
                "id": 1631,
                "distrito": "OLLACHEA",
                "provincia_id": 162
              },
              {
                "id": 1632,
                "distrito": "SAN GABAN",
                "provincia_id": 162
              },
              {
                "id": 1633,
                "distrito": "USICAYOS",
                "provincia_id": 162
              }
            ]
          },
          {
            "id": 163,
            "provincia": "CHUCUITO",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1634,
                "distrito": "JULI",
                "provincia_id": 163
              },
              {
                "id": 1635,
                "distrito": "DESAGUADERO",
                "provincia_id": 163
              },
              {
                "id": 1636,
                "distrito": "HUACULLANI",
                "provincia_id": 163
              },
              {
                "id": 1637,
                "distrito": "KELLUYO",
                "provincia_id": 163
              },
              {
                "id": 1638,
                "distrito": "PISACOMA",
                "provincia_id": 163
              },
              {
                "id": 1639,
                "distrito": "POMATA",
                "provincia_id": 163
              },
              {
                "id": 1640,
                "distrito": "ZEPITA",
                "provincia_id": 163
              }
            ]
          },
          {
            "id": 164,
            "provincia": "EL COLLAO",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1641,
                "distrito": "ILAVE",
                "provincia_id": 164
              },
              {
                "id": 1642,
                "distrito": "CAPAZO",
                "provincia_id": 164
              },
              {
                "id": 1643,
                "distrito": "PILCUYO",
                "provincia_id": 164
              },
              {
                "id": 1644,
                "distrito": "SANTA ROSA",
                "provincia_id": 164
              },
              {
                "id": 1645,
                "distrito": "CONDURIRI",
                "provincia_id": 164
              }
            ]
          },
          {
            "id": 165,
            "provincia": "HUANCANE",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1646,
                "distrito": "HUANCANE",
                "provincia_id": 165
              },
              {
                "id": 1647,
                "distrito": "COJATA",
                "provincia_id": 165
              },
              {
                "id": 1648,
                "distrito": "HUATASANI",
                "provincia_id": 165
              },
              {
                "id": 1649,
                "distrito": "INCHUPALLA",
                "provincia_id": 165
              },
              {
                "id": 1650,
                "distrito": "PUSI",
                "provincia_id": 165
              },
              {
                "id": 1651,
                "distrito": "ROSASPATA",
                "provincia_id": 165
              },
              {
                "id": 1652,
                "distrito": "TARACO",
                "provincia_id": 165
              },
              {
                "id": 1653,
                "distrito": "VILQUE CHICO",
                "provincia_id": 165
              }
            ]
          },
          {
            "id": 166,
            "provincia": "LAMPA",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1654,
                "distrito": "LAMPA",
                "provincia_id": 166
              },
              {
                "id": 1655,
                "distrito": "CABANILLA",
                "provincia_id": 166
              },
              {
                "id": 1656,
                "distrito": "CALAPUJA",
                "provincia_id": 166
              },
              {
                "id": 1657,
                "distrito": "NICASIO",
                "provincia_id": 166
              },
              {
                "id": 1658,
                "distrito": "OCUVIRI",
                "provincia_id": 166
              },
              {
                "id": 1659,
                "distrito": "PALCA",
                "provincia_id": 166
              },
              {
                "id": 1660,
                "distrito": "PARATIA",
                "provincia_id": 166
              },
              {
                "id": 1661,
                "distrito": "PUCARA",
                "provincia_id": 166
              },
              {
                "id": 1662,
                "distrito": "SANTA LUCIA",
                "provincia_id": 166
              },
              {
                "id": 1663,
                "distrito": "VILAVILA",
                "provincia_id": 166
              }
            ]
          },
          {
            "id": 167,
            "provincia": "MELGAR",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1664,
                "distrito": "AYAVIRI",
                "provincia_id": 167
              },
              {
                "id": 1665,
                "distrito": "ANTAUTA",
                "provincia_id": 167
              },
              {
                "id": 1666,
                "distrito": "CUPI",
                "provincia_id": 167
              },
              {
                "id": 1667,
                "distrito": "LLALLI",
                "provincia_id": 167
              },
              {
                "id": 1668,
                "distrito": "MACARI",
                "provincia_id": 167
              },
              {
                "id": 1669,
                "distrito": "NUÑOA",
                "provincia_id": 167
              },
              {
                "id": 1670,
                "distrito": "ORURILLO",
                "provincia_id": 167
              },
              {
                "id": 1671,
                "distrito": "SANTA ROSA",
                "provincia_id": 167
              },
              {
                "id": 1672,
                "distrito": "UMACHIRI",
                "provincia_id": 167
              }
            ]
          },
          {
            "id": 168,
            "provincia": "MOHO",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1673,
                "distrito": "MOHO",
                "provincia_id": 168
              },
              {
                "id": 1674,
                "distrito": "CONIMA",
                "provincia_id": 168
              },
              {
                "id": 1675,
                "distrito": "HUAYRAPATA",
                "provincia_id": 168
              },
              {
                "id": 1676,
                "distrito": "TILALI",
                "provincia_id": 168
              }
            ]
          },
          {
            "id": 169,
            "provincia": "SAN ANTONIO DE PUTINA",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1677,
                "distrito": "PUTINA",
                "provincia_id": 169
              },
              {
                "id": 1678,
                "distrito": "ANANEA",
                "provincia_id": 169
              },
              {
                "id": 1679,
                "distrito": "PEDRO VILCA APAZA",
                "provincia_id": 169
              },
              {
                "id": 1680,
                "distrito": "QUILCAPUNCU",
                "provincia_id": 169
              },
              {
                "id": 1681,
                "distrito": "SINA",
                "provincia_id": 169
              }
            ]
          },
          {
            "id": 170,
            "provincia": "SAN ROMAN",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1682,
                "distrito": "JULIACA",
                "provincia_id": 170
              },
              {
                "id": 1683,
                "distrito": "CABANA",
                "provincia_id": 170
              },
              {
                "id": 1684,
                "distrito": "CABANILLAS",
                "provincia_id": 170
              },
              {
                "id": 1685,
                "distrito": "CARACOTO",
                "provincia_id": 170
              }
            ]
          },
          {
            "id": 171,
            "provincia": "SANDIA",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1686,
                "distrito": "SANDIA",
                "provincia_id": 171
              },
              {
                "id": 1687,
                "distrito": "CUYOCUYO",
                "provincia_id": 171
              },
              {
                "id": 1688,
                "distrito": "LIMBANI",
                "provincia_id": 171
              },
              {
                "id": 1689,
                "distrito": "PATAMBUCO",
                "provincia_id": 171
              },
              {
                "id": 1690,
                "distrito": "PHARA",
                "provincia_id": 171
              },
              {
                "id": 1691,
                "distrito": "QUIACA",
                "provincia_id": 171
              },
              {
                "id": 1692,
                "distrito": "SAN JUAN DEL ORO",
                "provincia_id": 171
              },
              {
                "id": 1693,
                "distrito": "YANAHUAYA",
                "provincia_id": 171
              },
              {
                "id": 1694,
                "distrito": "ALTO INAMBARI",
                "provincia_id": 171
              }
            ]
          },
          {
            "id": 172,
            "provincia": "YUNGUYO",
            "departamento_id": 21,
            "distritos": [
              {
                "id": 1695,
                "distrito": "YUNGUYO",
                "provincia_id": 172
              },
              {
                "id": 1696,
                "distrito": "ANAPIA",
                "provincia_id": 172
              },
              {
                "id": 1697,
                "distrito": "COPANI",
                "provincia_id": 172
              },
              {
                "id": 1698,
                "distrito": "CUTURAPI",
                "provincia_id": 172
              },
              {
                "id": 1699,
                "distrito": "OLLARAYA",
                "provincia_id": 172
              },
              {
                "id": 1700,
                "distrito": "TINICACHI",
                "provincia_id": 172
              },
              {
                "id": 1701,
                "distrito": "UNICACHI",
                "provincia_id": 172
              }
            ]
          }
        ]
      },
      {
        "id": 22,
        "departamento": "SAN MARTIN",
        "provincias": [
          {
            "id": 173,
            "provincia": "MOYOBAMBA",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1702,
                "distrito": "MOYOBAMBA",
                "provincia_id": 173
              },
              {
                "id": 1703,
                "distrito": "CALZADA",
                "provincia_id": 173
              },
              {
                "id": 1704,
                "distrito": "HABANA",
                "provincia_id": 173
              },
              {
                "id": 1705,
                "distrito": "JEPELACIO",
                "provincia_id": 173
              },
              {
                "id": 1706,
                "distrito": "SORITOR",
                "provincia_id": 173
              },
              {
                "id": 1707,
                "distrito": "YANTALO",
                "provincia_id": 173
              }
            ]
          },
          {
            "id": 174,
            "provincia": "BELLAVISTA",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1708,
                "distrito": "BELLAVISTA",
                "provincia_id": 174
              },
              {
                "id": 1709,
                "distrito": "ALTO BIAVO",
                "provincia_id": 174
              },
              {
                "id": 1710,
                "distrito": "BAJO BIAVO",
                "provincia_id": 174
              },
              {
                "id": 1711,
                "distrito": "HUALLAGA",
                "provincia_id": 174
              },
              {
                "id": 1712,
                "distrito": "SAN PABLO",
                "provincia_id": 174
              },
              {
                "id": 1713,
                "distrito": "SAN RAFAEL",
                "provincia_id": 174
              }
            ]
          },
          {
            "id": 175,
            "provincia": "EL DORADO",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1714,
                "distrito": "SAN JOSE DE SISA",
                "provincia_id": 175
              },
              {
                "id": 1715,
                "distrito": "AGUA BLANCA",
                "provincia_id": 175
              },
              {
                "id": 1716,
                "distrito": "SAN MARTIN",
                "provincia_id": 175
              },
              {
                "id": 1717,
                "distrito": "SANTA ROSA",
                "provincia_id": 175
              },
              {
                "id": 1718,
                "distrito": "SHATOJA",
                "provincia_id": 175
              }
            ]
          },
          {
            "id": 176,
            "provincia": "HUALLAGA",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1719,
                "distrito": "SAPOSOA",
                "provincia_id": 176
              },
              {
                "id": 1720,
                "distrito": "ALTO SAPOSOA",
                "provincia_id": 176
              },
              {
                "id": 1721,
                "distrito": "EL ESLABON",
                "provincia_id": 176
              },
              {
                "id": 1722,
                "distrito": "PISCOYACU",
                "provincia_id": 176
              },
              {
                "id": 1723,
                "distrito": "SACANCHE",
                "provincia_id": 176
              },
              {
                "id": 1724,
                "distrito": "TINGO DE SAPOSOA",
                "provincia_id": 176
              }
            ]
          },
          {
            "id": 177,
            "provincia": "LAMAS",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1725,
                "distrito": "LAMAS",
                "provincia_id": 177
              },
              {
                "id": 1726,
                "distrito": "ALONSO DE ALVARADO",
                "provincia_id": 177
              },
              {
                "id": 1727,
                "distrito": "BARRANQUITA",
                "provincia_id": 177
              },
              {
                "id": 1728,
                "distrito": "CAYNARACHI",
                "provincia_id": 177
              },
              {
                "id": 1729,
                "distrito": "CUÑUMBUQUI",
                "provincia_id": 177
              },
              {
                "id": 1730,
                "distrito": "PINTO RECODO",
                "provincia_id": 177
              },
              {
                "id": 1731,
                "distrito": "RUMISAPA",
                "provincia_id": 177
              },
              {
                "id": 1732,
                "distrito": "SAN ROQUE DE CUMBAZA",
                "provincia_id": 177
              },
              {
                "id": 1733,
                "distrito": "SHANAO",
                "provincia_id": 177
              },
              {
                "id": 1734,
                "distrito": "TABALOSOS",
                "provincia_id": 177
              },
              {
                "id": 1735,
                "distrito": "ZAPATERO",
                "provincia_id": 177
              }
            ]
          },
          {
            "id": 178,
            "provincia": "MARISCAL CACERES",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1736,
                "distrito": "JUANJUI",
                "provincia_id": 178
              },
              {
                "id": 1737,
                "distrito": "CAMPANILLA",
                "provincia_id": 178
              },
              {
                "id": 1738,
                "distrito": "HUICUNGO",
                "provincia_id": 178
              },
              {
                "id": 1739,
                "distrito": "PACHIZA",
                "provincia_id": 178
              },
              {
                "id": 1740,
                "distrito": "PAJARILLO",
                "provincia_id": 178
              }
            ]
          },
          {
            "id": 179,
            "provincia": "PICOTA",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1741,
                "distrito": "PICOTA",
                "provincia_id": 179
              },
              {
                "id": 1742,
                "distrito": "BUENOS AIRES",
                "provincia_id": 179
              },
              {
                "id": 1743,
                "distrito": "CASPISAPA",
                "provincia_id": 179
              },
              {
                "id": 1744,
                "distrito": "PILLUANA",
                "provincia_id": 179
              },
              {
                "id": 1745,
                "distrito": "PUCACACA",
                "provincia_id": 179
              },
              {
                "id": 1746,
                "distrito": "SAN CRISTOBAL",
                "provincia_id": 179
              },
              {
                "id": 1747,
                "distrito": "SAN HILARION",
                "provincia_id": 179
              },
              {
                "id": 1748,
                "distrito": "SHAMBOYACU",
                "provincia_id": 179
              },
              {
                "id": 1749,
                "distrito": "TINGO DE PONASA",
                "provincia_id": 179
              },
              {
                "id": 1750,
                "distrito": "TRES UNIDOS",
                "provincia_id": 179
              }
            ]
          },
          {
            "id": 180,
            "provincia": "RIOJA",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1751,
                "distrito": "RIOJA",
                "provincia_id": 180
              },
              {
                "id": 1752,
                "distrito": "AWAJUN",
                "provincia_id": 180
              },
              {
                "id": 1753,
                "distrito": "ELIAS SOPLIN VARGAS",
                "provincia_id": 180
              },
              {
                "id": 1754,
                "distrito": "NUEVA CAJAMARCA",
                "provincia_id": 180
              },
              {
                "id": 1755,
                "distrito": "PARDO MIGUEL",
                "provincia_id": 180
              },
              {
                "id": 1756,
                "distrito": "POSIC",
                "provincia_id": 180
              },
              {
                "id": 1757,
                "distrito": "SAN FERNANDO",
                "provincia_id": 180
              },
              {
                "id": 1758,
                "distrito": "YORONGOS",
                "provincia_id": 180
              },
              {
                "id": 1759,
                "distrito": "YURACYACU",
                "provincia_id": 180
              }
            ]
          },
          {
            "id": 181,
            "provincia": "SAN MARTIN",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1760,
                "distrito": "TARAPOTO",
                "provincia_id": 181
              },
              {
                "id": 1761,
                "distrito": "ALBERTO LEVEAU",
                "provincia_id": 181
              },
              {
                "id": 1762,
                "distrito": "CACATACHI",
                "provincia_id": 181
              },
              {
                "id": 1763,
                "distrito": "CHAZUTA",
                "provincia_id": 181
              },
              {
                "id": 1764,
                "distrito": "CHIPURANA",
                "provincia_id": 181
              },
              {
                "id": 1765,
                "distrito": "EL PORVENIR",
                "provincia_id": 181
              },
              {
                "id": 1766,
                "distrito": "HUIMBAYOC",
                "provincia_id": 181
              },
              {
                "id": 1767,
                "distrito": "JUAN GUERRA",
                "provincia_id": 181
              },
              {
                "id": 1768,
                "distrito": "LA BANDA DE SHILCAYO",
                "provincia_id": 181
              },
              {
                "id": 1769,
                "distrito": "MORALES",
                "provincia_id": 181
              },
              {
                "id": 1770,
                "distrito": "PAPAPLAYA",
                "provincia_id": 181
              },
              {
                "id": 1771,
                "distrito": "SAN ANTONIO",
                "provincia_id": 181
              },
              {
                "id": 1772,
                "distrito": "SAUCE",
                "provincia_id": 181
              },
              {
                "id": 1773,
                "distrito": "SHAPAJA",
                "provincia_id": 181
              }
            ]
          },
          {
            "id": 182,
            "provincia": "TOCACHE",
            "departamento_id": 22,
            "distritos": [
              {
                "id": 1774,
                "distrito": "TOCACHE",
                "provincia_id": 182
              },
              {
                "id": 1775,
                "distrito": "NUEVO PROGRESO",
                "provincia_id": 182
              },
              {
                "id": 1776,
                "distrito": "POLVORA",
                "provincia_id": 182
              },
              {
                "id": 1777,
                "distrito": "SHUNTE",
                "provincia_id": 182
              },
              {
                "id": 1778,
                "distrito": "UCHIZA",
                "provincia_id": 182
              }
            ]
          }
        ]
      },
      {
        "id": 23,
        "departamento": "TACNA",
        "provincias": [
          {
            "id": 183,
            "provincia": "TACNA",
            "departamento_id": 23,
            "distritos": [
              {
                "id": 1779,
                "distrito": "TACNA",
                "provincia_id": 183
              },
              {
                "id": 1780,
                "distrito": "ALTO DE LA ALIANZA",
                "provincia_id": 183
              },
              {
                "id": 1781,
                "distrito": "CALANA",
                "provincia_id": 183
              },
              {
                "id": 1782,
                "distrito": "CIUDAD NUEVA",
                "provincia_id": 183
              },
              {
                "id": 1783,
                "distrito": "INCLAN",
                "provincia_id": 183
              },
              {
                "id": 1784,
                "distrito": "PACHIA",
                "provincia_id": 183
              },
              {
                "id": 1785,
                "distrito": "PALCA",
                "provincia_id": 183
              },
              {
                "id": 1786,
                "distrito": "POCOLLAY",
                "provincia_id": 183
              },
              {
                "id": 1787,
                "distrito": "SAMA",
                "provincia_id": 183
              },
              {
                "id": 1788,
                "distrito": "CORONEL GREGORIO ALBARRACIN LANCHIPA",
                "provincia_id": 183
              }
            ]
          },
          {
            "id": 184,
            "provincia": "CANDARAVE",
            "departamento_id": 23,
            "distritos": [
              {
                "id": 1789,
                "distrito": "CANDARAVE",
                "provincia_id": 184
              },
              {
                "id": 1790,
                "distrito": "CAIRANI",
                "provincia_id": 184
              },
              {
                "id": 1791,
                "distrito": "CAMILACA",
                "provincia_id": 184
              },
              {
                "id": 1792,
                "distrito": "CURIBAYA",
                "provincia_id": 184
              },
              {
                "id": 1793,
                "distrito": "HUANUARA",
                "provincia_id": 184
              },
              {
                "id": 1794,
                "distrito": "QUILAHUANI",
                "provincia_id": 184
              }
            ]
          },
          {
            "id": 185,
            "provincia": "JORGE BASADRE",
            "departamento_id": 23,
            "distritos": [
              {
                "id": 1795,
                "distrito": "LOCUMBA",
                "provincia_id": 185
              },
              {
                "id": 1796,
                "distrito": "ILABAYA",
                "provincia_id": 185
              },
              {
                "id": 1797,
                "distrito": "ITE",
                "provincia_id": 185
              }
            ]
          },
          {
            "id": 186,
            "provincia": "TARATA",
            "departamento_id": 23,
            "distritos": [
              {
                "id": 1798,
                "distrito": "TARATA",
                "provincia_id": 186
              },
              {
                "id": 1799,
                "distrito": "CHUCATAMANI",
                "provincia_id": 186
              },
              {
                "id": 1800,
                "distrito": "ESTIQUE",
                "provincia_id": 186
              },
              {
                "id": 1801,
                "distrito": "ESTIQUE-PAMPA",
                "provincia_id": 186
              },
              {
                "id": 1802,
                "distrito": "SITAJARA",
                "provincia_id": 186
              },
              {
                "id": 1803,
                "distrito": "SUSAPAYA",
                "provincia_id": 186
              },
              {
                "id": 1804,
                "distrito": "TARUCACHI",
                "provincia_id": 186
              },
              {
                "id": 1805,
                "distrito": "TICACO",
                "provincia_id": 186
              }
            ]
          }
        ]
      },
      {
        "id": 24,
        "departamento": "TUMBES",
        "provincias": [
          {
            "id": 187,
            "provincia": "TUMBES",
            "departamento_id": 24,
            "distritos": [
              {
                "id": 1806,
                "distrito": "TUMBES",
                "provincia_id": 187
              },
              {
                "id": 1807,
                "distrito": "CORRALES",
                "provincia_id": 187
              },
              {
                "id": 1808,
                "distrito": "LA CRUZ",
                "provincia_id": 187
              },
              {
                "id": 1809,
                "distrito": "PAMPAS DE HOSPITAL",
                "provincia_id": 187
              },
              {
                "id": 1810,
                "distrito": "SAN JACINTO",
                "provincia_id": 187
              },
              {
                "id": 1811,
                "distrito": "SAN JUAN DE LA VIRGEN",
                "provincia_id": 187
              }
            ]
          },
          {
            "id": 188,
            "provincia": "CONTRALMIRANTE VILLAR",
            "departamento_id": 24,
            "distritos": [
              {
                "id": 1812,
                "distrito": "ZORRITOS",
                "provincia_id": 188
              },
              {
                "id": 1813,
                "distrito": "CASITAS",
                "provincia_id": 188
              }
            ]
          },
          {
            "id": 189,
            "provincia": "ZARUMILLA",
            "departamento_id": 24,
            "distritos": [
              {
                "id": 1814,
                "distrito": "ZARUMILLA",
                "provincia_id": 189
              },
              {
                "id": 1815,
                "distrito": "AGUAS VERDES",
                "provincia_id": 189
              },
              {
                "id": 1816,
                "distrito": "MATAPALO",
                "provincia_id": 189
              },
              {
                "id": 1817,
                "distrito": "PAPAYAL",
                "provincia_id": 189
              }
            ]
          }
        ]
      },
      {
        "id": 25,
        "departamento": "UCAYALI",
        "provincias": [
          {
            "id": 190,
            "provincia": "CORONEL PORTILLO",
            "departamento_id": 25,
            "distritos": [
              {
                "id": 1818,
                "distrito": "CALLERIA",
                "provincia_id": 190
              },
              {
                "id": 1819,
                "distrito": "CAMPOVERDE",
                "provincia_id": 190
              },
              {
                "id": 1820,
                "distrito": "IPARIA",
                "provincia_id": 190
              },
              {
                "id": 1821,
                "distrito": "MASISEA",
                "provincia_id": 190
              },
              {
                "id": 1822,
                "distrito": "YARINACOCHA",
                "provincia_id": 190
              },
              {
                "id": 1823,
                "distrito": "NUEVA REQUENA",
                "provincia_id": 190
              }
            ]
          },
          {
            "id": 191,
            "provincia": "ATALAYA",
            "departamento_id": 25,
            "distritos": [
              {
                "id": 1824,
                "distrito": "RAYMONDI",
                "provincia_id": 191
              },
              {
                "id": 1825,
                "distrito": "SEPAHUA",
                "provincia_id": 191
              },
              {
                "id": 1826,
                "distrito": "TAHUANIA",
                "provincia_id": 191
              },
              {
                "id": 1827,
                "distrito": "YURUA",
                "provincia_id": 191
              }
            ]
          },
          {
            "id": 192,
            "provincia": "PADRE ABAD",
            "departamento_id": 25,
            "distritos": [
              {
                "id": 1828,
                "distrito": "PADRE ABAD",
                "provincia_id": 192
              },
              {
                "id": 1829,
                "distrito": "IRAZOLA",
                "provincia_id": 192
              },
              {
                "id": 1830,
                "distrito": "CURIMANA",
                "provincia_id": 192
              }
            ]
          },
          {
            "id": 193,
            "provincia": "PURUS",
            "departamento_id": 25,
            "distritos": [
              {
                "id": 1831,
                "distrito": "PURUS",
                "provincia_id": 193
              }
            ]
          }
        ]
      }
    ]

  const [categoriaContext, setCategoriaContext] = useState({
    id: 0,
    nombre: "hola"
  })

  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);

  //TABLA CARRITO
  const [carrito, setCarrito] = useState([]);
  
  // Función para añadir un producto al carrito
  const addProducto = (producto) => {
    setCarrito([...carrito, producto]);
    setCantidadCarrito(cantidadCarrito + 1);
  };

  // Función para actualizar un producto del carrito
  const updateProducto = (id, updatedProducto) => {
    setCarrito(carrito.map(producto => producto.id === id ? updatedProducto : producto));
    
  };

  // Función para eliminar un producto del carrito
  const deleteProducto = (id) => {
    setCarrito(carrito.filter(producto => producto.id !== id));
    setCantidadCarrito(cantidadCarrito - 1);
  };

  useEffect(()=>{
    setTotalCarrito(carrito.reduce((acc, item) => acc + item.subtotal, 0));
  }, [carrito])
  return (
    <ClienteContext.Provider
      value={{
        categoriaContext, setCategoriaContext,
        cantidadCarrito, setCantidadCarrito,
        carrito,
        totalCarrito, setTotalCarrito,
        addProducto, updateProducto, 
        deleteProducto, 
        dataUbicacion
      }}
    >
      {props.children}
    </ClienteContext.Provider>
  )
}
