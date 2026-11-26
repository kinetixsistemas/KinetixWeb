import { siteConfig } from '../config/site';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export type BlogContentItem = string | BlogSection;

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime: string;
  author: string;
  content: BlogContentItem[];
  relatedService?: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'inventario-sin-excel',
    title: 'Cómo llevar el inventario de un negocio sin Excel',
    description:
      'Una guía práctica para pasar de la hoja de cálculo a un inventario confiable: qué registrar, quién registra y cómo conectar stock, ventas y cobranza.',
    publishedTime: '2026-10-05',
    modifiedTime: '2026-11-20',
    author: siteConfig.author,
    relatedService: 'sistemas-pwa-inventario-ventas',
    content: [
      'Un inventario falla el día que un cliente pregunta si hay existencias y nadie puede responder con seguridad. También falla cuando el producto aparece en la hoja, pero no está en el anaquel. Excel sirve para empezar: es conocido, flexible y está en casi todas las computadoras. El problema aparece cuando varias personas escriben en el mismo archivo desde distintos teléfonos.',
        'Llevar el inventario sin Excel no significa trabajar con más papeles. Significa poner los datos en un sistema que cualquiera pueda actualizar al momento. En este artículo verás qué registrar, qué campos necesitas y cómo ordenar la migración. La meta no es tener más software. Es saber qué tienes, dónde está y qué pasó con cada unidad.',
      {
        heading: 'Qué significa realmente llevar un inventario',
        paragraphs: [
          'Un inventario es un registro ordenado de productos, existencias y movimientos. No es solo una lista de nombres con cantidades. Si sabes cuántos productos tienes hoy, pero no sabes cuántos entraron, cuántos salieron o quién hizo el cambio, tienes un catálogo, no un inventario.',
          'Tres preguntas definen si tu control funciona: ¿qué hay disponible ahora?, ¿dónde está cada producto? y ¿qué movimiento produjo ese saldo? Una hoja de cálculo puede responder la primera durante un tiempo. Responder las tres con varias personas trabajando a la vez es donde empiezan las dificultades.',
        ],
      },
      {
        heading: 'Lo que Excel hace bien y lo que no',
        paragraphs: [
          'Excel funciona para una operación pequeña y tranquila: una sola persona, pocos productos y registro al final del día. Permite ordenar, filtrar y hacer fórmulas. Esa flexibilidad es lo que lo hace útil al inicio y lo que lo vuelve frágil después.',
          'Cuando entran varios vendedores, un almacenista y un encargado de cobranza, aparecen las versiones duplicadas. Cada persona guarda su copia. Nadie sabe cuál es la correcta. Una fórmula se borra sin querer, una columna se pega en el lugar equivocado y el saldo deja de coincidir con la mercancía real.',
          'Excel tampoco está pensado para registrar desde el móvil mientras se descarga un camión o se atiende a un cliente. No avisa cuando un producto baja de su mínimo. No deja claro quién modificó una celda. Y no conecta la venta con la baja de existencias sin que alguien lo haga a mano.',
        ],
      },
      {
        heading: 'Antes de migrar, ordena la información',
        paragraphs: [
          'No conviene copiar una hoja desordenada dentro de un sistema nuevo. Antes de migrar, revisa el catálogo. Define un nombre por producto, elimina duplicados y decide cómo identificar cada referencia. Si vendes repuestos o productos similares, un código propio te evita confusiones.',
          'Haz un conteo físico real. Cuenta lo que hay en el anaquel, en el almacén y en cualquier otro punto donde guardes mercancía. Ese conteo es tu punto de partida. No lo reemplaces por el último número que aparece en la hoja, aunque creas que está bien.',
          'Define también unidades, categorías y ubicaciones. No hace falta una estructura perfecta desde el primer día. Sí hace falta que los nombres signifiquen lo mismo para todos.',
        ],
      },
      {
        heading: 'Los campos mínimos de cada producto',
        paragraphs: [
          'Empieza con pocos campos y bien usados. Un producto necesita un código identificador, un nombre claro, una categoría, una unidad de medida, la existencia disponible y un stock mínimo. Si manejas más de un punto de guardado, agrega la ubicación. Si necesitas controlar costos, agrega el costo y el precio de venta.',
          'Si un campo no ayuda a reponer, despachar o cobrar, probablemente sobra al inicio. Los campos innecesarios se convierten en trabajo extra y en datos que nadie actualiza. Un inventario simple y correcto vale más que una ficha enorme y abandonada.',
          'Escribe las unidades de forma consistente. No mezcles cajas, unidades y paquetes bajo el mismo nombre sin indicarlo.',
        ],
      },
      {
        heading: 'Registra movimientos, no solo saldos',
        paragraphs: [
          'El saldo es el resultado. El movimiento es la prueba. Cada entrada, salida, ajuste, devolución o transferencia debe quedar registrado con fecha, producto, cantidad, motivo y responsable. Así puedes explicar por qué el saldo cambió sin depender de la memoria de nadie.',
          'Una entrada registra lo que recibes del proveedor. Una salida, lo que vendes o despachas. Un ajuste corrige una diferencia de un conteo. Una devolución registra lo que trae el cliente. Una transferencia mueve existencias sin cambiar el total.',
          'Registrar solo el saldo final pierde el historial. Registrar el movimiento permite revisar lo ocurrido y corregir el inventario sin alterar el pasado.',
        ],
      },
      {
        heading: 'Define quién registra y cuándo',
        paragraphs: [
          'El inventario se desactualiza cuando el registro queda para después. Define momentos concretos: al recibir mercancía, al confirmar una venta, al entregar un despacho, al aceptar una devolución y al realizar un conteo. Cada momento debe tener una persona responsable.',
          'Una regla sencilla funciona mejor que un manual largo: quien toca la mercancía, registra el movimiento. Si el vendedor registra la venta, el almacenista registra la entrada y el encargado registra el ajuste, nadie depende de que otro recuerde el detalle.',
          'También conviene separar permisos. No todas las personas necesitan cambiar precios o borrar movimientos.',
        ],
      },
      {
        heading: 'Conecta el inventario con ventas y cobranza',
        paragraphs: [
          'El beneficio aparece cuando el inventario deja de vivir aislado. Al registrar una venta, la existencia se descuenta. Ya no necesitas actualizar dos archivos con el mismo dato.',
          'En un negocio que vende al mayor, el pedido entra, se revisa, se aprueba y pasa a despacho. Cada etapa consume existencias según tus reglas. El cliente ve información coherente y tu equipo sabe qué preparar.',
          'La cobranza también entra en el mismo flujo. Saber qué se vendió, qué se despachó y qué se pagó permite responder con datos, no con corazonadas. Si quieres ver cómo se organiza este esquema con roles para administrador, vendedor y cliente, revisa nuestro trabajo en plataformas B2B mayoristas.',
        ],
      },
      {
        heading: 'Piensa en el móvil y en la conexión',
        paragraphs: [
          'El registro ocurre donde está la mercancía: en el almacén, en el mostrador o en la ruta. Un sistema que solo se usa desde la computadora se queda desactualizado entre turnos. Por eso conviene pensar primero en el teléfono y después en la pantalla grande.',
          'Una PWA es una página que se instala en el móvil y abre desde un ícono, sin pasar por una tienda de aplicaciones. Puede consultar y registrar información con una conexión irregular y sincronizar los datos cuando la conexión vuelve. Esa característica importa en negocios donde la señal no es estable todo el día.',
          'Antes de elegir una herramienta, prueba el flujo desde un teléfono. Busca un producto, registra una entrada, descuenta una venta y revisa el historial. En nuestro artículo sobre qué es una PWA explicamos esta tecnología con más detalle.',
        ],
      },
      {
        heading: 'Alertas de reposición sin complicarte',
        paragraphs: [
          'Define un stock mínimo por producto y deja que el sistema avise cuando se alcance. No hace falta empezar con pronósticos complejos. Una alerta clara, basada en un mínimo acordado, ya evita muchas reposiciones tarde.',
          'Evita configurar avisos para todo al mismo tiempo. Comienza con los productos que más se mueven o con los que más afectan tu operación. Ajusta los mínimos con la información real que deje el sistema después de un tiempo.',
          'La alerta no sustituye la revisión periódica. Un conteo detecta mermas o confusión de productos que la alerta no ve.',
        ],
      },
      {
        heading: 'Cómo hacer el cambio sin detener el negocio',
        paragraphs: [
          'La migración no tiene por qué interrumpir las ventas. Empieza por una copia de tu Excel como respaldo. Carga el catálogo depurado, confirma el stock inicial con el conteo físico y valida que los nombres y las unidades sean los mismos que usa tu equipo.',
          'Después, prueba con movimientos reales. Registra una entrada, una venta y una devolución. Compara el resultado con lo que ocurrió en el almacén. Cuando el flujo funcione, capacita a las personas que van a usarlo y deja por escrito las reglas básicas de registro.',
          'Puedes mantener el Excel como respaldo durante un periodo corto, pero no como fuente de verdad. Si los datos siguen en dos lugares, el problema vuelve a aparecer.',
        ],
      },
      {
        heading: 'Errores que conviene evitar',
        paragraphs: [
          'El primero es dejar el Excel «por si acaso» como registro principal. El segundo es no registrar devoluciones y ajustes, que explican las diferencias. El tercero es automatizarlo todo el primer día: mejor cinco campos bien mantenidos que treinta abandonados.',
        ],
      },
      {
        heading: 'Cuándo conviene un sistema a medida',
        paragraphs: [
          'Un sistema de inventario cobra sentido cuando hay varias personas registrando, cuando se vende desde más de un canal, cuando existen sucursales o cuando el inventario debe conectarse con ventas, facturación y cobranza. También cuando el cliente necesita consultar disponibilidad antes de hacer un pedido.',
          'En Kinetix Sistemas construimos sistemas PWA de inventario y ventas instalables en móvil, tablet y computadora, con control de stock, clientes, ventas y cobranza. El alcance se define en un diagnóstico y cada proyecto se cotiza de forma personalizada. Conoce el servicio de inventario y ventas y decide si encaja con tu operación.',
        ],
      },
      'Un inventario confiable no depende de que el archivo esté bien cerrado. Depende de registrar cada movimiento al momento y de que todos consulten la misma información. Esa es la diferencia entre una hoja de cálculo y un control real del negocio.',
    ],
  },
  {
    slug: 'que-es-una-pwa',
    title: 'Qué es una PWA y por qué conviene para tu negocio',
    description:
      'Una PWA es una web instalable en el móvil que puede funcionar con conexión irregular. Te explicamos qué es, qué no es y en qué casos aporta valor real a un negocio.',
    publishedTime: '2026-10-12',
    modifiedTime: '2026-11-18',
    author: siteConfig.author,
    relatedService: 'sistemas-pwa-inventario-ventas',
    content: [
      'Una PWA, o Progressive Web App, es una página web que se puede instalar en el móvil y se comporta como una aplicación: abre desde un ícono, ocupa su propia ventana y puede funcionar con conexión limitada. No se descarga de una tienda y no exige que el usuario aprenda un sistema nuevo. Es, en esencia, una web pensada para usarse todos los días.',
      'La definición suena técnica, pero la idea es sencilla. Tu negocio ya tiene un proceso que hoy se hace en papel, en Excel o en una herramienta que solo abre en la computadora. Una PWA lleva ese proceso al teléfono de quien lo ejecuta. Si además la conexión no siempre es estable, puede guardar cambios y sincronizarlos después.',
      'En este artículo explicamos qué hace una PWA, qué no hace, en qué situaciones conviene y cómo evaluar una antes de invertir. No se trata de seguir una moda tecnológica. Se trata de que el registro ocurra donde ocurre el trabajo real.',
      {
        heading: 'Qué hace una PWA',
        paragraphs: [
          'Una PWA reúne varias capacidades. Tiene un manifiesto, que es el archivo que indica nombre, ícono y colores cuando se instala en el dispositivo. Tiene un service worker, que es un script que permite guardar ciertos recursos y responder incluso cuando la red falla. Y se sirve por HTTPS, como cualquier sitio moderno.',
          'El resultado visible es una aplicación que abre desde la pantalla de inicio. Puedes consultar pantallas ya cargadas sin depender de la señal en cada clic. Puedes registrar una venta o una entrada de inventario con mala conexión y dejar que los datos se envíen cuando vuelva la red.',
          'La actualización también es más simple que en una aplicación tradicional. No hay que esperar a que el usuario descargue una versión nueva desde una tienda. La web se actualiza en el servidor y la siguiente apertura muestra el cambio.',
        ],
      },
      {
        heading: 'Qué no es una PWA',
        paragraphs: [
          'Una PWA no es una aplicación nativa de Android o iOS. No aparece en Google Play ni en la App Store, y no tiene acceso ilimitado a todas las funciones del teléfono. Si tu producto depende de funciones profundas del dispositivo, una app nativa puede ser más adecuada.',
          'Tampoco es una solución mágica para trabajar sin internet de forma indefinida. Puede mostrar lo que ya está guardado y registrar acciones pendientes de sincronización. No puede consultar datos del servidor que nunca llegaron al equipo. La promesa honesta es tolerancia a una conexión irregular, no funcionamiento eterno sin red.',
          'Tampoco reemplaza por sí sola a una API de mensajería ni convierte un WhatsApp normal en una herramienta automática. Una PWA es una forma de entregar una interfaz. Lo que haga dentro depende del sistema y de las integraciones que se construyan detrás.',
        ],
      },
      {
        heading: 'Por qué conviene en negocios de Venezuela',
        paragraphs: [
          'El primer motivo es el hábito. Las personas ya saben abrir una web desde el teléfono, sin instalar nada desde una tienda. Eso reduce la resistencia del equipo cuando se cambia una hoja de cálculo o un cuaderno por una herramienta digital.',
          'El segundo motivo es la conexión. En almacenes, camiones, ferias o puntos de venta con señal irregular, una web que depende de recargar todo en cada paso se vuelve incómoda. Una PWA puede seguir el flujo con lo que tiene guardado y sincronizar más tarde.',
          'El tercero es el costo de mantener un único sistema. La misma interfaz sirve para móvil, tablet y computadora. No hace falta desarrollar una app por separado para cada plataforma cuando el objetivo es consultar existencias, registrar pedidos o revisar cobros.',
        ],
      },
      {
        heading: 'Casos donde una PWA aporta valor real',
        paragraphs: [
          'Inventario y ventas es el ejemplo más claro. El vendedor consulta disponibilidad, registra la venta y descuenta existencias desde el teléfono. El administrador revisa el mismo dato desde la computadora. No hay dos versiones del inventario.',
          'También encaja en un consultorio que necesita agenda e historia clínica disponible al momento de la consulta, o en una distribuidora cuyo catálogo al mayor debe consultarse en una visita comercial. La condición común es que alguien necesita información y registro en el lugar donde trabaja.',
          'No aporta tanto si solo necesitas una página informativa que se lee una vez y se comparte por WhatsApp. Para ese caso, una web bien hecha es suficiente. La PWA tiene sentido cuando hay tareas repetidas, datos que cambian y varias personas interactuando.',
        ],
      },
      {
        heading: 'Funcionar con mala conexión: qué esperar',
        paragraphs: [
          'El comportamiento offline depende de qué datos se hayan guardado antes. Si abriste el catálogo con conexión, es razonable esperar que puedas consultarlo después sin señal. Si necesitas un dato que nunca se descargó, no aparecerá por arte de magia.',
          'Lo importante es que la interfaz no se quede en blanco cuando falle la red. Una buena PWA avisa que está trabajando sin conexión, permite continuar con las acciones previstas y muestra claramente qué queda pendiente de sincronizar.',
          'También hay que definir qué pasa si dos personas registran cambios sobre el mismo producto sin conexión. Un sistema bien diseñado establece reglas para evitar que el último dato sobrescriba al anterior sin control. Ese detalle se revisa en el diseño, no después del lanzamiento.',
        ],
      },
      {
        heading: 'Seguridad, cuentas y permisos',
        paragraphs: [
          'Instalar una PWA no significa que cualquiera pueda ver todo. El acceso se controla con cuentas y roles: administrador, vendedor, almacenista o cliente mayorista, según el negocio. Cada rol ve las pantallas y las acciones que corresponden.',
          'El uso de HTTPS es parte del diseño. Proteger la información enviada entre el teléfono y el servidor es una condición básica, especialmente cuando se manejan datos de clientes, precios o historiales clínicos.',
          'Hay que considerar también el respaldo de la información y la política de contraseñas. Una herramienta práctica mal configurada puede generar un problema mayor que el cuaderno que pretendía reemplazar.',
        ],
      },
      {
        heading: 'Cómo evaluar una PWA antes de invertir',
        paragraphs: [
          'Haz una prueba concreta. Abre la web en el teléfono, busca la opción de instalar y comprueba que el ícono aparezca en la pantalla de inicio. Después activa el modo de vuelo, entra a la aplicación instalada y observa qué pantallas siguen disponibles.',
          'Luego registra una acción sencilla sin conexión, restaura la red y revisa si el dato se sincroniza. Pregunta también quién tiene acceso a la información, cómo se recupera una cuenta y qué pasa si se pierde el teléfono. Esas preguntas dicen más que una demostración visual bonita.',
          'Finalmente, observa si la interfaz se adapta al tamaño del teléfono. Si los botones son pequeños o los formularios obligan a hacer scroll sin sentido, el equipo dejará de usarla aunque la tecnología sea correcta.',
        ],
      },
      {
        heading: 'Cómo se construye',
        paragraphs: [
          'En Kinetix Sistemas desarrollamos PWA con Next.js, React y TypeScript en la interfaz, y bases de datos como Supabase o PostgreSQL cuando el proyecto lo requiere. El trabajo incluye el diseño de los flujos en móvil, la configuración de la instalación y la lógica de sincronización.',
          'La tecnología se elige según el problema. No todas las necesidades requieren la misma arquitectura. Lo que no cambia es el punto de partida: entender qué hace hoy el usuario, qué datos maneja y qué debe ocurrir cuando la conexión falle.',
          'El alcance se define en un diagnóstico. Una PWA de catálogo no es lo mismo que un sistema de inventario con facturación, clientes y cobranza. Por eso manejamos cotización personalizada y no publicamos un precio único para proyectos tan distintos.',
        ],
      },
      {
        heading: 'Preguntas frecuentes',
        paragraphs: [
          '¿Necesito publicar en una tienda de aplicaciones? No. La PWA se instala desde el navegador, mediante el ícono de la web.',
          '¿Ocupa mucho espacio en el teléfono? No como una app nativa. Guarda recursos y datos necesarios para el funcionamiento, según lo que se haya diseñado.',
          '¿Puedo usarla en iPhone? Safari permite agregar webs a la pantalla de inicio. Las capacidades disponibles pueden variar respecto de Android, por eso conviene probar en los equipos que realmente usa tu equipo.',
          '¿Cuánto cuesta? Depende de los módulos, las integraciones y los flujos. Cada proyecto se cotiza de forma individual después de entender la operación.',
        ],
      },
      {
        heading: 'Cuándo dar el paso',
        paragraphs: [
          'Da el paso cuando tu operación dependa de datos que cambian varias veces al día y cuando esos datos se registran lejos de la computadora. Un sistema PWA de inventario y ventas reúne esa necesidad: stock, clientes, ventas y cobranza en un mismo lugar, instalable en móvil, tablet y PC.',
          'Si solo quieres presentar tu negocio en internet, una web corporativa bien estructurada cumple el objetivo. Si quieres que tu equipo deje de copiar datos entre hojas y teléfonos, una PWA merece una conversación. Conoce el servicio de sistemas PWA de inventario y ventas para ver qué módulos se pueden incluir.',
        ],
      },
      'Una PWA no es una promesa de funcionar sin internet para siempre. Es una forma de llevar una web útil al bolsillo, mantenerla disponible cuando la señal falla y darle al negocio un único lugar donde registrar lo que ocurre. Si tu operación ya se mueve entre el almacén, el mostrador y el teléfono, esa es la pregunta que conviene responder.',
    ],
  },
  {
    slug: 'software-consultorio-dental',
    title: 'Software para consultorio dental: qué debe incluir',
    description:
      'Una guía para elegir software de consultorio dental: historia clínica, odontograma, presupuestos, pagos y agenda en un solo lugar.',
    publishedTime: '2026-10-19',
    modifiedTime: '2026-10-19',
    author: siteConfig.author,
    relatedService: 'sistema-clinicas-odontologicas',
    content: [
      'Elegir software para un consultorio dental no es elegir un programa bonito. Es decidir dónde va a vivir la información clínica y administrativa del consultorio durante los próximos años. Si los datos se reparten entre carpetas, hojas de cálculo y mensajes, cada visita empieza con la misma pregunta: ¿dónde está la historia de este paciente?',
      'Un sistema pensado para odontología debe reunir la historia clínica, el odontograma, los presupuestos, los pagos y la agenda. No hace falta incluir todo de una vez, pero sí conviene saber qué piezas faltan antes de tomar una decisión. En este artículo repasamos qué debe incluir y qué preguntas conviene hacer antes de contratar.',
      'También explicamos por qué la agenda y los recordatorios deben conversar con el resto del sistema. Un recordatorio que llega sin contexto evita una ausencia, pero no reemplaza una historia clínica bien organizada. El valor está en que todo el consultorio trabaje con la misma información.',
    ],
  },
  {
    slug: 'cuanto-cuesta-pagina-web-venezuela',
    title: 'Precios Páginas Web en Venezuela',
    description:
      'Qué variables influyen en el precio de una página web en Venezuela y por qué cada proyecto se cotiza según su alcance real.',
    publishedTime: '2026-10-26',
    modifiedTime: '2026-10-26',
    author: siteConfig.author,
    relatedService: 'desarrollo-web',
    content: [
      'La pregunta sobre cuánto cuesta una página web en Venezuela no tiene una respuesta única. Un sitio que presenta un servicio y abre WhatsApp no es lo mismo que un catálogo con miles de productos, un panel administrativo o una tienda conectada al inventario. El precio depende del alcance, no del nombre que se le dé al proyecto.',
      'Antes de pedir un presupuesto, define qué debe hacer el visitante: llamar, escribir por WhatsApp, descargar un documento, dejar sus datos o comprar. Esa acción determina la estructura de la página, los formularios, las integraciones y el trabajo de contenido. Sin esa definición, cualquier cifra es una adivinanza.',
      'En Kinetix Sistemas publicamos precios de referencia para páginas web: desde $149 para una landing, desde $249 para un sitio corporativo y desde $499 para una web corporativa completa. Los sistemas, las plataformas B2B y las automatizaciones se cotizan según el alcance del proyecto. Lo que sí podemos explicarte es qué se evalúa para llegar a una propuesta clara y cómo se organiza la entrega.',
    ],
  },
  {
    slug: 'vender-al-mayor-internet-catalogo-b2b',
    title: 'Cómo vender al mayor por internet (catálogo B2B)',
    description:
      'Qué necesita un distribuidor para vender al mayor por internet: catálogo, precios por rol, pedidos, aprobación y despacho.',
    publishedTime: '2026-11-02',
    modifiedTime: '2026-11-02',
    author: siteConfig.author,
    relatedService: 'plataforma-b2b-mayorista',
    content: [
      'Vender al mayor por internet no es subir una lista de precios a una web. Es organizar para que un cliente mayorista vea el inventario disponible, arme su pedido y reciba una respuesta clara, mientras tu equipo mantiene el control de precios, aprobación y despacho. Si esa información viaja por mensajes separados, el pedido se pierde o se duplica.',
      'Un catálogo B2B útil empieza por los roles. El administrador gestiona inventario, precios, usuarios y reportes. El vendedor revisa pedidos, clientes y cotizaciones. El cliente mayorista consulta existencias y compra al mayor con reglas definidas. Cada rol ve lo que necesita y nada más.',
      'El flujo también importa. El pedido entra al sistema, tu equipo lo revisa, lo aprueba y pasa a despacho. Cuando el precio cambia en el sistema interno, la web pública refleja el nuevo valor para quien tiene acceso. En este artículo explicamos cómo pensar ese esquema antes de invertir en una plataforma.',
    ],
  },
  {
    slug: 'whatsapp-business-api-vs-normal',
    title: 'WhatsApp Business API vs WhatsApp normal: diferencias',
    description:
      'Diferencias entre WhatsApp normal, WhatsApp Business y la API de WhatsApp para negocios que quieren automatizar sin perder el control.',
    publishedTime: '2026-11-09',
    modifiedTime: '2026-11-09',
    author: siteConfig.author,
    relatedService: 'automatizacion-ia-whatsapp',
    content: [
      'WhatsApp normal y WhatsApp Business sirven para conversar persona a persona. La diferencia aparece cuando un negocio necesita que varias personas atiendan el mismo número, registrar conversaciones, conectar un sistema interno o responder de forma automática sin depender de un teléfono encendido. Ahí entra la API de WhatsApp Business.',
      'La app WhatsApp Business añade herramientas útiles para un comercio: catálogo, respuestas rápidas, etiquetas y horarios de atención. Es una opción razonable para empezar. Pero sigue siendo una aplicación que se usa desde un dispositivo, con límites claros cuando el volumen de mensajes crece o cuando se quiere integrar con otros sistemas.',
      'La API, en cambio, está pensada para conectar el canal con herramientas de atención, CRM, hojas de cálculo o flujos automatizados. Trabajamos con Evolution API y con la Cloud API de Meta según el caso. En este artículo comparamos las opciones para que elijas de acuerdo con tu operación y no con una moda.',
    ],
  },
  {
    slug: 'agente-ia-whatsapp',
    title: 'Cómo un agente de IA atiende clientes por WhatsApp',
    description:
      'Cómo funciona un agente de WhatsApp con IA: qué preguntas responde, cómo califica prospectos y cuándo deriva a una persona.',
    publishedTime: '2026-11-16',
    modifiedTime: '2026-11-16',
    author: siteConfig.author,
    relatedService: 'automatizacion-ia-whatsapp',
    content: [
      'Un agente de IA en WhatsApp no es un robot que habla por hablar. Es un flujo que recibe un mensaje, entiende qué quiere la persona, responde con información útil, hace preguntas concretas y decide cuándo debe intervenir un humano. Bien diseñado, evita que una consulta quede sin respuesta fuera del horario de atención.',
      'La primera tarea es responder preguntas frecuentes con precisión: qué ofrece el negocio, cómo se solicita un presupuesto, qué información se necesita y cuáles son los pasos. La segunda es calificar al prospecto, es decir, obtener los datos que permiten saber si hay una oportunidad real y comunicárselos al equipo.',
      'La tercera tarea es de apoyo y crítica: saber cuándo derivar. Si la persona pide algo que el agente no puede confirmar, si hay un reclamo o si la conversación sale del guion, el sistema pasa el caso a una persona. En este artículo explicamos cómo se construye ese equilibrio con n8n, Evolution API y modelos de lenguaje.',
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
