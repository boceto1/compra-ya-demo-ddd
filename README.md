# Compra Ya Demo DDD

## Resumen
Este proyecto es la implementación práctica de los conceptos de Domain-Driven Design (DDD), explorados en la serie de blog llamada [Cuando el negocio habla y el código escucha: una serie sobre DDD Series](https://dev.to/boceto1/series/33099)


## Tabla de contenidos
- [Acerca del proyecto](#acerca-del-proyecto)
- [Serie de Blogs](#serie-de-blogs)
- [Instalar el proyecto](#instalar-el-proyecto)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Conceptos claves de DDD](#conceptos-claves-de-ddd)
<!-- - [How to Contribute](#how-to-contribute)
- [License](#license) -->

## Acerca del proyecto
Una aplicación de demostración para ilustrar los principios de DDD en un escenario del mundo real, enfocándose en el dominio "Compra Ya".

## Serie de blogs
Este repositorio acompaña una serie de blogs:
- [Parte 1: El punto de partida de DDD: Hablar el idioma del negocio](https://dev.to/boceto1/el-punto-de-partida-de-ddd-hablar-el-idioma-del-negocio-36m8)
- [Parte 2: Bounded Contexts: Delimitando el lenguaje](https://dev.to/boceto1/bounded-contexts-delimitando-el-lenguaje-4mih)
- [Parte 3: Del negocio al software: Construyendo un Bounded Context en DDD](https://dev.to/boceto1/del-negocio-al-software-construyendo-un-bounded-context-en-ddd-4hhi)
- [Parte 4: El software ha escuchado: Implementando un Bounded Context](#)

## Instalar el proyecto
### Prerrequisitos
- Node.js (versión 16 o superior)
- Yarn

### Pasos de instalación

1. **Clonar el repositorio**
  ```bash
  git clone https://github.com/tu-usuario/compra-ya-demo-ddd.git
  cd compra-ya-demo-ddd
  ```

2. **Instalar dependencias**
  ```bash
  yarn install
  ```
34. **Ejecutar el proyecto en modo desarrollo**
  ```bash
  yarn start:dev
  ```

5. **Acceder a la aplicación**
  - API: `http://localhost:3000`

### Comandos útiles
```bash
# Ejecutar tests
yarn test

# Ejecutar tests en modo watch
yarn test:watch

# Build para producción
yarn build

# Ejecutar en producción
yarn start:prod
```

## Estructura del proyecto

Para los propósitos educativos de este proyecto recomendamos enfocarse en el `src/shipping`que contiene la estructura de clean architecture para aplicar el modelo DDD para "Generar una orden de envío" sobre la cual se trabaja en esta serie de blogs

```
shipping/
├── application/
│   └── create-shipment.usecase.ts
├── domain/
│   ├── vos/
│   │   └── address.vo.ts
│   └── entities/
│       └── shipment.entity.ts
└── presentation/
  └── shipping.events.ts
```

De ahí es importante reconocer, cómo se ven en el modelo del Bounded Context (BC), que quien inicia la acción "Generar orden de envío es el BC orders, entonces se ha expuesto un método POST para probar el flujo.

Ejemplo curl para prueba:

```bash
curl --location 'localhost:3000/orders/testOrderPaid' \
--data '{
  "address": {
    "addressLine1": "Av. Amazonas",
    "addressLine2": "Edificio Central",
    "city": "Quito",
    "country": "Ecuador",
    "instructions": "Leave at the reception"
  },
  "associationOrderState": "paid"
}'
```

## Conceptos claves de DDD
En este proyecto se aplican los siguientes conceptos de DDD:

* **Bounded Context :** Implementación del conjunto de reglas, términos y acciones de un subdomino.
* **Clean Architecture :** Forma de estructurar proyectos de software propuesta por Robert C. Martin
* **Entities :** Representación de objetos identificables sobre el cual se realizan acciones de negocio.
* **Value Objects :** Representación de objetos no identificables que describen "algo" dentro de un subdominio
* **Invariants :** Reglas cuya evaluación siempre debe ser verdadera

<!-- ## Cómo contribuir
Guías para contribuir al repositorio.

## Licencia
Información sobre la licencia del proyecto. -->
