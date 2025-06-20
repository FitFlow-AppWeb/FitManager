# FitManager

<p align="center">Universidad: Universidad Peruana de Ciencias Aplicadas (UPC)</p>
<p align="center">Carrera: Ingeniería de Software</p>
<p align="center">Ciclo: 05</p>
<p align="center">Aplicaciones Web 1ASI0730</p>
<p align="center">Sección 4388</p>
<p align="center">Profesor: Alex Humberto Sánchez Ponce</p>

<p align="center"><strong>Informe del Trabajo Final</strong></p>

<p align="center">FitFlow</p>
<p align="center">Alvarado De La Cruz, Juan Carlos U202216150</p>
<p align="center">Luque Minaya, Renzo Andrés U20221C275</p>
<p align="center">Martel Andrade, Cassius Estefano U202312287</p>
<p align="center">Nakamurake Teruya, Alex Tomio U20201f855</p>
<p align="center">Ortiz Alarcón, Victor Nicolás U202312899</p>

<p align="center">Abril 2025</p>

# Registro de versiones del informe

## Versiones del Documento

| Versión   | Fecha     | Autor(es)                                                                                 | Descripción                                                                                   |
|-----------|-----------|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| 1.0 (TB1) | 25/04/25  | - Alvarado De La Cruz, Juan Carlos<br>- Luque Minaya, Renzo Andrés<br>- Martel Andrade, Cassius Estefano<br>- Nakamurakare Teruya, Alex Tomio<br>- Ortiz Alarcón, Víctor Nicolás | Capítulo I: Introducción<br>Capítulo II: Requirements Elicitation & Analysis<br>Capítulo III: Requirements Specification<br>Capítulo IV: Product Design<br>Capítulo V: Product Implementation, Validation & Deployment |
| 2.0 (TP)  | 14/05/25  | - Alvarado De La Cruz, Juan Carlos<br>- Luque Minaya, Renzo Andrés<br>- Martel Andrade, Cassius Estefano<br>- Nakamurakare Teruya, Alex Tomio<br>- Ortiz Alarcón, Víctor Nicolás | Correcciones de la TB1<br>Capítulo V: Product Implementation, Validation & Deployment        |
| 3.0 (TB2)  | 20/06/25  | - Alvarado De La Cruz, Juan Carlos<br>- Luque Minaya, Renzo Andrés<br>- Martel Andrade, Cassius Estefano<br>- Nakamurakare Teruya, Alex Tomio<br>- Ortiz Alarcón, Víctor Nicolás | Correcciones del TP<br>Capítulo V: Product Implementation, Validation & Deployment<br>Desarrollo del FitManager Web Services        |


# Project Report Collaboration Insights

Repositorio donde está el project report: https://github.com/FitFlow-AppWeb/FitManager

Para el desarrollo del informe hemos trabajado en un google docs, y luego hemos pasado el contenido al readme del repositorio principal. A cada uno se le encargo subir un capítulo.
Para esta entrega, se actualizo el readme y se agrego el sprint 2.

<p align="center">
  <img src="https://github.com/user-attachments/assets/77ebf430-b486-4123-824b-fadd5583decd" alt="Insights repositorio">
</p>

# Contenido

- [Fitmanager](#fitmanager)
 
- [Registro de versiones del informe](#registro-de-versiones-del-informe)
 
- [Project Report Collaboration Insights](#project-report-collaboration-insights)

- [Contenido](#contenido)

- [Student Outcome](#student-outcome)

- [CAPÍTULO 1: INTRODUCCIÓN](#capítulo-1-introducción)
  * [1.1. Startup Profile](#11-startup-profile)
    + [1.1.1. Descripción del Startup](#111-descripción-del-startup)
    + [1.1.2. Perfiles de los integrantes del equipo](#112-perfiles-de-los-integrantes-del-equipo)
  * [1.2. Solution Profile](#12-solution-profile)
    + [1.2.1. Antecedentes y Problemática](#121-antecedentes-y-problemática)
    + [1.2.2. Lean UX Process](#122-lean-ux-process)
      - [1.2.2.1. Lean UX Problem Statements](#1221-lean-ux-problem-statements)
      - [1.2.2.2. Lean UX Assumptions](#1222-lean-ux-assumptions)
      - [1.2.2.3. Lean UX Hypothesis Statements](#1223-lean-ux-hypothesis-statements)
      - [1.2.2.4. Lean UX Canvas](#1224-lean-ux-canvas)
  * [1.3. Propuesta de Valor y Alcance](#13-propuesta-de-valor-y-alcance)
  * [1.4. Segmentos Objetivo](#14-segmentos-objetivo)

- [CAPÍTULO 2: REQUIREMENTS ELICITATION & ANALYSIS](#capítulo-2-requirements-elicitation--analysis)
  * [2.1. Competidores](#21-competidores)
    + [2.1.1. Análisis Competitivo](#211-análisis-competitivo)
    + [2.1.2. Estrategias y tácticas frente a los competidores](#212-estrategias-y-tácticas-frente-a-los-competidores)
  * [2.2. Entrevistas](#22-entrevistas)
    + [2.2.1. Diseño de entrevistas](#221-diseño-de-entrevistas)
    + [2.2.2. Registro de entrevistas](#222-registro-de-entrevistas)
    + [2.2.3. Análisis de entrevistas](#223-análisis-de-entrevistas)
  * [2.3. Needfinding](#23-needfinding)
    + [2.3.1. User Personas](#231-user-personas)
    + [2.3.2. User Task Matrix](#232-user-task-matrix)
    + [2.3.3. User Journey Mapping](#233-user-journey-mapping)
    + [2.3.4. Empathy Mapping](#234-empathy-mapping)
    + [2.3.5. As-Is Scenario Mapping](#235-as-is-scenario-mapping)
  * [2.4 Ubiquitous Language](#24-ubiquitous-language)

- [CAPÍTULO 3: REQUIREMENTS SPECIFICATION](#capítulo-3-requirements-specification)
  * [3.1. To-Be Scenario Mapping](#31-to-be-scenario-mapping)
  * [3.2. User Stories](#32-user-stories)
  * [3.3. Impact Mapping](#33-impact-mapping)
  * [3.4. Product Backlog](#34-product-backlog)

- [CAPÍTULO 4: PRODUCT UX/UI DESIGN](#capítulo-4-product-uxui-design)
  * [4.1. Style Guidelines](#41-style-guidelines)
    + [4.1.1 General Style Guidelines](#411-general-style-guidelines)
    + [4.1.2 Web Style Guidelines](#412-web-style-guidelines)
  * [4.2. Information Architecture](#42-information-architecture)
    + [4.2.1. Organization Systems](#421-organization-systems)
    + [4.2.2. Labeling Systems](#422-labeling-systems)
    + [4.2.3. SEO Tags and Meta Tags](#423-seo-tags-and-meta-tags)
    + [4.2.4 Searching Systems](#424-searching-systems)
    + [4.2.5. Navigation Systems](#425-navigation-systems)
  * [4.3. Landing Page UI Design](#43-landing-page-ui-design)
    + [4.3.1. Landing Page Wireframes](#431-landing-page-wireframes)
    + [4.3.2. Landing Page Mock-Ups](#432-landing-page-mock-ups)
  * [4.4 Web Applications UX/UI Design](#44-web-applications-uxui-design)
    + [4.4.1. Web Applications Wireframes](#441-web-applications-wireframes)
    + [4.4.2. Web Applications Wireflow Diagrams](#442-web-applications-wireflow-diagrams)
    + [4.4.3. Web Applications Mock-up](#443-web-applications-mock-up)
    + [4.4.4. Web Applications User Flow Diagrams](#444-web-applications-user-flow-diagrams)
  * [4.5. Web Applications Prototyping](#45-web-applications-prototyping)
  * [4.6. Domain-Driven Software Architecture](#46-domain-driven-software-architecture)
    + [4.6.1. Software Architecture Context Diagram](#461-software-architecture-context-diagram)
    + [4.6.2. Software Architecture Container Diagram](#462-software-architecture-container-diagram)
    + [4.6.3. Software Architecture Components Diagram](#463-software-architecture-components-diagram)
  * [4.7. Software Object-Oriented Design](#47-software-object-oriented-design)
    + [4.7.1. Class Diagram](#471-class-diagram)
    + [4.7.2. Class Dictionary](#472-class-dictionary)
  * [4.8. Database Design](#48-database-design)
    + [4.8.1. Database Diagram](#481-database-diagram)

- [CAPÍTULO 5: PRODUCT IMPLEMENTATION & DEPLOYMENT](#capítulo-5-product-implementation--deployment)
  * [5.1. Software Configuration Management](#51-software-configuration-management)
    + [5.1.1. Software Development Environment Configuration](#511-software-development-environment-configuration)
    + [5.1.2. Source Code Management](#512-source-code-management)
    + [5.1.3. Source Code Style Guide & Conventions](#513-source-code-style-guide--conventions)
    + [5.1.4. Software Deployment Configuration](#514-software-deployment-configuration)
  * [5.2. Landing Page, Services & Applications Implementation](#52-landing-page-services--applications-implementation)
    + [5.2.1. Sprint 1](#521-sprint-1)
      - [5.2.1.1. Sprint Planning](#5211-sprint-planning)
      - [5.2.1.2. Aspect Leaders and Collaborators](#5212-aspect-leaders-and-collaborators)
      - [5.2.1.3 Sprint Backlog 1](#5213-sprint-backlog-1)
      - [5.2.1.4. Development Evidence for Sprint Review](#5214-development-evidence-for-sprint-review)
      - [5.2.1.5. Execution Evidence for Sprint Review](#5215-execution-evidence-for-sprint-review)
      - [5.2.1.6. Services Documentation Evidence for Sprint Review](#5216-services-documentation-evidence-for-sprint-review)
      - [5.2.1.7. Software Deployment Evidence for Sprint Review](#5217-software-deployment-evidence-for-sprint-review)
      - [5.2.1.8. Team Collaboration Insights during Sprint](#5218-team-collaboration-insights-during-sprint)
* [5.2. Landing Page, Services & Applications Implementation](#52-landing-page-services--applications-implementation)
    + [5.2.1. Sprint 1](#521-sprint-1)
      - [5.2.1.1. Sprint Planning](#5211-sprint-planning)
      - [5.2.1.2. Aspect Leaders and Collaborators](#5212-aspect-leaders-and-collaborators)
      - [5.2.1.3 Sprint Backlog 1](#5213-sprint-backlog-1)
      - [5.2.1.4. Development Evidence for Sprint Review](#5214-development-evidence-for-sprint-review)
      - [5.2.1.5. Execution Evidence for Sprint Review](#5215-execution-evidence-for-sprint-review)
      - [5.2.1.6. Services Documentation Evidence for Sprint Review](#5216-services-documentation-evidence-for-sprint-review)
      - [5.2.1.7. Software Deployment Evidence for Sprint Review](#5217-software-deployment-evidence-for-sprint-review)
      - [5.2.1.8. Team Collaboration Insights during Sprint](#5218-team-collaboration-insights-during-sprint)
    + [5.2.2. Sprint 2](#522-sprint-2)
      - [5.2.2.1. Sprint Planning](#5221-sprint-planning)
      - [5.2.2.2. Aspect Leaders and Collaborators](#5222-aspect-leaders-and-collaborators)
      - [5.2.2.3 Sprint Backlog 2](#5223-sprint-backlog-2)
      - [5.2.2.4. Development Evidence for Sprint Review](#5224-development-evidence-for-sprint-review)
      - [5.2.2.5. Execution Evidence for Sprint Review](#5225-execution-evidence-for-sprint-review)
      - [5.2.2.6. Services Documentation Evidence for Sprint Review](#5226-services-documentation-evidence-for-sprint-review)
      - [5.2.2.7. Software Deployment Evidence for Sprint Review](#5227-software-deployment-evidence-for-sprint-review)
      - [5.2.2.8. Team Collaboration Insights during Sprint](#5228-team-collaboration-insights-during-sprint)
    + [5.2.3. Sprint 3](#523-sprint-3)
      - [5.2.3.1. Sprint Planning](#5231-sprint-planning)
      - [5.2.3.2. Aspect Leaders and Collaborators](#5232-aspect-leaders-and-collaborators)
      - [5.2.3.3 Sprint Backlog 2](#5233-sprint-backlog-3)
      - [5.2.3.4. Development Evidence for Sprint Review](#5234-development-evidence-for-sprint-review)
      - [5.2.3.5. Execution Evidence for Sprint Review](#5235-execution-evidence-for-sprint-review)
      - [5.2.3.6. Services Documentation Evidence for Sprint Review](#5236-services-documentation-evidence-for-sprint-review)
      - [5.2.3.7. Software Deployment Evidence for Sprint Review](#5237-software-deployment-evidence-for-sprint-review)
      - [5.2.3.8. Team Collaboration Insights during Sprint](#5238-team-collaboration-insights-during-sprint)
* [5.3. Validation Interviews](#53-validation-interviews)
    + [5.3.1. Diseño de Entrevistas](#531-diseño-de-entrevistas)
    + [5.3.2. Registro de Entrevistas](#532-registro-de-entrevistas)
    + [5.3.3. Evaluaciones según Heurísticas](#533-evaluaciones-según-heurísticas)
* [5.4. Video About-the-Product](#54-video-about-the-product)

- [Conclusiones](#conclusiones)
  
- [Recomendaciones](#recomendaciones)
  
- [Bibliografía](#bibliografía)
  
- [Anexos](#anexos)

# Student Outcome

ABET - EAC - Student Outcome 5
Criterio: La capacidad de funcionar efectivamente en un equipo cuyos miembros juntos proporcionan liderazgo, crean un entorno de colaboración e inclusivo, establecen objetivos, planifican tareas y cumplen objetivos.

---

## TB1

| Criterio específico | Acciones realizadas | Conclusiones |
|---------------------|---------------------|--------------|
| Trabaja en equipo para proporcionar liderazgo en forma conjunta | **Alvarado De La Cruz, Juan Carlos**: Entrevistas, análisis competitivo, antecedentes y problemática, style guidelines, landing page UI design, web applications UI design. | El equipo demostró liderazgo conjunto al dividir responsabilidades estratégicamente según fortalezas individuales, como análisis, investigación de mercado o validación con usuarios. La ejecución de entrevistas y los mapeos de escenarios requirieron coordinación y toma de decisiones colaborativas, fomentando un liderazgo compartido en todas las fases de diagnóstico del problema y definición de oportunidades. Esta sinergia permitió mantener una visión alineada y centrada en el usuario desde múltiples frentes del proyecto. |
|  | **Luque Minaya, Renzo Andrés**: Entrevistas, style guidelines, landing page UI design, web applications UI design. | La colaboración efectiva fue esencial para alinear la visión del proyecto entre todos los integrantes. Un liderazgo compartido permitió que las discusiones y la planificación inicial se enriquecieran con diversas perspectivas, asegurando así una base sólida y un entendimiento común de los objetivos desde el comienzo. |
|  | **Martel Andrade, Cassius Estefano**: Lean UX Process, antecedentes y problemática, needfinding, user stories, information architecture, diagramas, landing page UI design, web applications UI design. | El trabajo en equipo jugó un papel crucial en la planificación del proyecto, asegurando que todos los miembros estuvieran alineados con la visión y los objetivos establecidos. Gracias a una colaboración continua, logramos garantizar que el desarrollo siguiera los lineamientos iniciales, lo que permitió mantener un enfoque coherente y eficiente en todo momento. |
|  | **Nakamurakare Teruya, Alex Tomio**: Lean UX Process, antecedentes y problemática, user stories, product backlog, landing page UI design, web applications UI design, sprint planning. | Trabajar en equipo para proporcionar liderazgo en forma conjunta fortalece la toma de decisiones, fomenta un ambiente de colaboración y permite aprovechar las habilidades y perspectivas de todos los miembros. Este enfoque compartido no solo distribuye la responsabilidad, sino que promueve un espacio donde cada integrante se siente valorado y comprometido con los objetivos comunes. |
|  | **Ortiz Alarcón, Víctor Nicolás**: Landing page UI design, web applications UI design, desarrollo de la landing page. | El trabajo en equipo fue fundamental para lograr una planificación clara y unificada desde las primeras etapas del proyecto. La colaboración entre todos los integrantes permitió abordar el análisis del problema y la definición de oportunidades desde distintas perspectivas, enriqueciendo el proceso y asegurando una visión centrada en el usuario. Gracias a una comunicación constante y al compromiso de cada miembro, se logró avanzar de forma estructurada y coherente. |
| Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos | **Alvarado De La Cruz, Juan Carlos** | El desarrollo de actividades evidenció un entorno inclusivo y colaborativo, donde cada miembro aportó perspectivas desde diseño, análisis y experiencia de usuario. Las metas fueron definidas en conjunto y las tareas se asignaron equitativamente mediante herramientas de planificación compartida. El cumplimiento de entregables clave demuestra que se logró una organización efectiva del trabajo en equipo, promoviendo la integración de diversas disciplinas en la toma de decisiones. |
|  | **Luque Minaya, Renzo Andrés** | La definición precisa de metas y la planificación detallada de tareas resultaron fundamentales para un flujo de trabajo organizado. Un entorno donde se valoró la puntualidad y el compromiso individual con las responsabilidades asignadas permitió al equipo evitar malentendidos y avanzar eficientemente hacia el cumplimiento de los primeros objetivos. |
|  | **Martel Andrade, Cassius Estefano** | La planificación detallada desde el inicio fue clave para la efectividad del proyecto. Definir con precisión las tareas y expectativas permitió que no existieran malentendidos entre los miembros del equipo, especialmente en áreas críticas como el diseño, la codificación de la landing page y el manejo de los commits. Esto facilitó un flujo de trabajo organizado y sin contratiempos. |
|  | **Nakamurakare Teruya, Alex Tomio** | Crear un entorno colaborativo e inclusivo, establecer metas claras, planificar tareas de forma organizada y cumplir los objetivos propuestos son elementos clave para el éxito de cualquier equipo. Este enfoque impulsa la participación activa, el respeto por la diversidad de ideas y el sentido de responsabilidad compartida, lo que fortalece la cohesión del grupo y mejora los resultados alcanzados. |
|  | **Ortiz Alarcón, Víctor Nicolás** | En esta fase del proyecto, mi aporte se centró en el desarrollo de funcionalidades clave como el login y el componente de notificaciones, integrándolos de manera fluida con el resto del sistema. El trabajo en equipo se vio reforzado por el uso de ramas para una mejor gestión del código y una comunicación constante que permitió alinear criterios técnicos y de diseño. Esta dinámica favoreció una integración ordenada de los avances individuales y potenció la calidad general del producto. |

---

## TP

## TP

| Criterio específico | Acciones realizadas | Conclusiones |
|---------------------|---------------------|--------------|
| Trabaja en equipo para proporcionar liderazgo en forma conjunta | **Alvarado De La Cruz, Juan Carlos**: Implementación de sección de perfil y traducciones con i18n. | Durante esta fase, los miembros del equipo asumieron roles complementarios en el liderazgo. La elaboración de la pantalla de perfil implicó toma de decisiones compartida sobre prioridades de diseño y experiencia de usuario, mientras que la investigación fue distribuida equitativamente entre los miembros. Esto permitió aprovechar las fortalezas individuales y facilitar un liderazgo distribuido en base a conocimiento y habilidades, consolidando una visión común del producto. |
|  | **Luque Minaya, Renzo Andrés**: Implementación de sección de asistencia y transacciones. | Durante esta etapa, la comunicación constante y abierta dentro del equipo fue un pilar para el liderazgo conjunto. Facilitó la toma de decisiones informadas y aseguró que los avances individuales contribuyeran de manera coherente al progreso general del proyecto, aprovechando la fortaleza colectiva. |
|  | **Martel Andrade, Cassius Estefano**: Implementación de secciones de inventario, empleados e ítems. | Durante todo el proceso, nos aseguramos de mantener a cada miembro informado sobre los avances y tareas de los demás. Esta comunicación constante no solo aumentó la profundidad del proyecto, sino que también fortaleció la coherencia en las decisiones tomadas. Como resultado, el proyecto creció de manera más integrada y fluida, beneficiándose de la contribución de cada miembro en sus respectivas áreas. |
|  | **Nakamurakare Teruya, Alex Tomio**: Implementación de sección de dashboard y calendario. | En esta entrega, trabajamos en equipo de manera organizada utilizando ramas, lo que permitió una mejor gestión del desarrollo y control de versiones. Fomentamos el intercambio de ideas, lo que enriqueció el proceso colaborativo y facilitó la identificación y aplicación de mejoras en la aplicación. Esta metodología no solo fortaleció el trabajo en equipo, sino que también elevó la calidad del producto final. |
|  | **Ortiz Alarcón, Víctor Nicolás**: Implementación de sección de notificaciones y login. | Desde el inicio del proyecto, la colaboración constante y el uso de herramientas compartidas facilitaron una organización clara de las tareas y una comunicación efectiva entre los miembros. El enfoque en la integración de distintas perspectivas —como análisis, diseño y experiencia de usuario— permitió que cada etapa avanzara con solidez y coherencia. El cumplimiento de los entregables demuestra que el equipo logró mantener un ritmo de trabajo equilibrado y orientado a los objetivos establecidos. |
| Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos | **Alvarado De La Cruz, Juan Carlos** | Se promovió un entorno de trabajo abierto al intercambio de ideas, donde cada integrante pudo aportar desde su perspectiva y experiencia. Las tareas fueron planificadas de forma consensuada mediante reuniones semanales y herramientas de gestión, lo que facilitó la organización y el cumplimiento de los objetivos en tiempo. Esta dinámica fortaleció la inclusión de todos los miembros y mejoró la eficiencia en la ejecución del proyecto. |
|  | **Luque Minaya, Renzo Andrés** | La efectividad en la TP se vio impulsada por un entorno colaborativo enfocado en la consecución de objetivos. La planificación estructurada, como la adopción de sprints para el frontend, y el cumplimiento riguroso de las tareas asignadas, fueron clave para mantener el enfoque y lograr avances significativos, culminando con el cumplimiento de las metas establecidas para este entregable. |
|  | **Martel Andrade, Cassius Estefano** | La adopción de la metodología de planificación basada en sprints fue fundamental para el desarrollo ágil del frontend. Al establecer objetivos claros y alcanzables en cada sprint, conseguimos mantener un enfoque constante y dirigido, lo que resultó en una ejecución más rápida y de mayor calidad. Esta estructura nos permitió optimizar nuestros recursos y tiempo, logrando avances significativos de manera continua. |
|  | **Nakamurakare Teruya, Alex Tomio** | En esta entrega, planificamos abordar la mayor parte del desarrollo del frontend, y logramos cumplir con lo establecido. Esto refleja una adecuada planificación de metas y una ejecución efectiva del trabajo. Considero que hemos alcanzado los objetivos propuestos para este entregable, demostrando un buen manejo del tiempo y del esfuerzo en equipo. |
|  | **Ortiz Alarcón, Víctor Nicolás** | Durante esta etapa del proyecto, contribuí activamente al desarrollo del login y de componentes funcionales como el de notificaciones, integrándolos dentro del sistema de forma coherente con el resto del frontend. El uso de sprints y reuniones de seguimiento permitió distribuir las tareas de manera equitativa y asegurar un flujo de trabajo constante. Esta metodología facilitó la entrega de resultados concretos en los tiempos establecidos y promovió una colaboración efectiva entre los miembros del equipo. |

---

## TB2

| Criterio específico | Acciones realizadas | Conclusiones |
|---------------------|---------------------|--------------|
| Trabaja en equipo para proporcionar liderazgo en forma conjunta | **Alvarado De La Cruz, Juan Carlos**: Desarrollo de bounded context Classes y el deployment. | Al desarrollar el Bounded Context Classes y liderar el deployment del backend, aseguramos una pieza clave para la funcionalidad central de la aplicación. Conseguimos tomar decisiones compartidas sobre cómo integrar eficazmente este módulo en el ecosistema general, consolidando una visión unificada del producto. |
|  | **Luque Minaya, Renzo Andrés**: Desarrollo del bounded context de Finances e internacionalización. | Con el desarrollo del Bounded Context Finances y la gestión de la internacionalización del backend, pudimos liderar áreas críticas que impactan la escalabilidad del sistema. La comunicación constante nos facilitó la toma de decisiones informadas, asegurando que nuestros avances individuales contribuyeran coherentemente al progreso global del proyecto. |
|  | **Martel Andrade, Cassius Estefano**: Desarrollo del bounded context de Members. | Al desarrollar el Bounded Context Members en el backend, nos aseguramos de mantener a cada miembro informado sobre los avances de esta entidad central. Esta comunicación constante no solo aumentó la profundidad del módulo, sino que también fortaleció la coherencia en las decisiones que tomamos como equipo. |
|  | **Nakamurakare Teruya, Alex Tomio**: Desarrollo del bounded context de Inventory. | En la implementación del Bounded Context Inventory en el backend, trabajamos de manera organizada utilizando ramas, lo que nos permitió una mejor gestión del desarrollo y control de versiones. Fomentamos el intercambio de ideas, lo que enriqueció el proceso colaborativo e impulsó mejoras en la lógica del backend. |
|  | **Ortiz Alarcón, Víctor Nicolás**: Desarrollo del bounded context de Employees y Notifications. | Desde el inicio del proyecto, al desarrollar los Bounded Contexts Employees y Notifications en el backend, la colaboración constante y el uso de herramientas compartidas nos facilitaron una organización clara de las tareas y una comunicación efectiva. Esto permitió integrar distintas perspectivas para avanzar con solidez. |
| Crea un entorno colaborativo e inclusivo, establece metas, planifica tareas y cumple objetivos | **Alvarado De La Cruz, Juan Carlos** | Promovimos un entorno abierto al intercambio de ideas al planificar el backend, especialmente con el módulo de Clases. Las tareas fueron consensuadas y organizadas, lo que nos permitió cumplir los objetivos de desarrollo y despliegue del backend de manera eficiente y colaborativa. |
|  | **Luque Minaya, Renzo Andrés** | La implementación de la lógica de Finanzas en el backend y la internacionalización impulsó un entorno colaborativo enfocado en objetivos. Conseguimos una planificación estructurada y un cumplimiento riguroso de las tareas, lo que fue clave para lograr avances significativos y cumplir las metas establecidas para este entregable del backend. |
|  | **Martel Andrade, Cassius Estefano** | La adopción de sprints para el desarrollo del backend, especialmente en el módulo de Miembros, fue fundamental. Al establecer objetivos claros, logramos mantener un enfoque constante y dirigido, optimizando nuestros recursos para una ejecución más rápida y de mayor calidad en el desarrollo de este componente. |
|  | **Nakamurakare Teruya, Alex Tomio** | En esta entrega, planificamos abordar la mayor parte del desarrollo del backend para el inventario, y logramos cumplir con lo establecido. Esto refleja una adecuada planificación de metas y una ejecución efectiva del trabajo, alcanzando los objetivos propuestos para este entregable. |
|  | **Ortiz Alarcón, Víctor Nicolás** | Durante esta etapa del proyecto, contribuimos activamente al desarrollo de la lógica del backend para empleados y notificaciones. El uso de sprints y reuniones de seguimiento nos permitió distribuir las tareas de manera equitativa y asegurar un flujo de trabajo constante, facilitando la entrega de resultados concretos en los tiempos establecidos. |

# CAPÍTULO 1: INTRODUCCIÓN

## 1.1. Startup Profile

### 1.1.1. Descripción del Startup

FitFlow es una startup que busca transformar la gestión y operación de gimnasios mediante soluciones digitales accesibles, intuitivas y eficientes. Nace como respuesta a una necesidad creciente en el sector fitness: la falta de herramientas tecnológicas adaptadas a las realidades de los negocios pequeños y medianos, que todavía dependen de procesos manuales como papel, hojas de cálculo o mensajes por WhatsApp. En FitFlow creemos que la tecnología puede ser una aliada poderosa para profesionalizar la industria del fitness, permitiendo que entrenadores, dueños de gimnasios y usuarios se enfoquen en lo que realmente importa: mejorar su bienestar físico, entrenar y motivar, mientras gestionan su tiempo y recursos de manera eficiente. Trabajamos para crear herramientas que faciliten la administración y mejoren la experiencia tanto para los profesionales del rubro como para los usuarios de los gimnasios.
Misión: Diseñar y ofrecer soluciones digitales que simplifiquen y modernicen la gestión de gimnasios, elevando el estándar operativo del sector fitness y empoderando a los profesionales del rubro a hacer crecer sus negocios de manera sostenible, al mismo tiempo que mejoran la experiencia de los usuarios de gimnasios.
Visión: Convertirnos en la startup líder en transformación digital del fitness en Latinoamérica, siendo reconocidos por nuestra capacidad de impactar positivamente en la administración, organización y crecimiento de gimnasios de todos los tipos y alcances, a la vez que proporcionamos una experiencia más fluida y satisfactoria para los usuarios.

### 1.1.2. Perfiles de los integrantes del equipo

| Nombre | Foto | Carrera | Descripción |
|--------|------|---------|-------------|
| Alvarado De La Cruz, Juan Carlos U202216150 | ![image](https://github.com/user-attachments/assets/82ded8c5-a355-4197-8efa-65c4887b2e14) | Ingeniería de Software | Soy Juan Carlos Alvarado, soy estudiante de la carrera de Ing. de Software. Me gusta resolver problemas y aprender cosas que son de mi interés, tengo experiencia programando en C++ y en Python. |
| Luque Minaya, Renzo Andrés U20221C275 | ![image](https://github.com/user-attachments/assets/6afc3b9c-2851-4428-97c9-d6c26a65cb41) | Ingeniería de Software | Me llamo Renzo Luque, actualmente estoy cursando la mitad de la carrera de Ingeniería de Software en la UPC. Desde pequeño siempre me ha llamado la atención la tecnología y la programación, razón por la que escogí esta carrera. Considero que me desenvuelvo bien en equipo y suelo ser puntual en mis entregas. |
| Martel Andrade, Cassius Estefano U202312287 | ![image](https://github.com/user-attachments/assets/6d204cd7-48f9-4648-ba72-2c0328ebbd3d) | Ingeniería de Software | Me llamo Cassius Martel y soy estudiante de Ingeniería de Software, y tengo cierta experiencia usando C++. Me caracterizó por ser una persona con iniciativa y liderazgo, que siempre procura la efectividad de cada integrante del equipo y la realización de un buen trabajo. |
| Nakamurake Teruya, Alex Tomio U20201f855 | ![image](https://github.com/user-attachments/assets/154a072e-92bc-4a6b-958c-2c04a60a616a) | Ingeniería de Software | Mi nombre es Alex Tomio Nakamurakare y soy estudiante de la carrera de Ingeniería de Software de la UPC. El motivo por el cual estoy en esta carrera es debido a que me gusta mucho analizar problemas y crear soluciones mediante el uso de la programación. |
| Ortiz Alarcón, Victor Nicolás U202312899 | ![image](https://github.com/user-attachments/assets/66c8134f-6cae-491c-b6d6-06147f1f3cea) | Ingeniería de Software | Soy estudiante del quinto ciclo de la carrera de ingeniería de software de la universidad UPC y escogí esta carrera porque me interesa el desarrollo de aplicaciones web y base de datos. Me gustan los videojuegos y el deporte. |

## 1.2. Solution Profile

FitManager es una plataforma web de FitFlow diseñada para digitalizar y optimizar la gestión de gimnasios, permitiendo administrar clientes, pagos, horarios y entrenadores desde un solo lugar. Pensada para gimnasios independientes y estudios de entrenamiento, simplifica procesos, elimina el desorden administrativo y mejora la experiencia tanto para dueños como para alumnos, facilitando el crecimiento y la profesionalización del negocio.

### 1.2.1. Antecedentes y Problemática

La técnica 5W2H es una herramienta de gestión que se basa en responder siete preguntas clave: What, Why, Where, Who, When, How y How Much. Esta técnica es útil porque ayuda a organizar, planificar y tomar decisiones de manera estructurada, asegurando que todos los aspectos relevantes de un proyecto sean considerados, lo que mejora la claridad y la eficiencia en la ejecución (Álvarez, 2020).

#### 1.2.1.1 What

#### ¿Cuál es el problema?

El problema que aborda FitManager es la falta de digitalización y automatización en la gestión de gimnasios, lo que genera ineficiencias en tareas críticas como la administración de pagos, membresías, reservas y comunicación con los clientes. Muchos gimnasios siguen utilizando procesos manuales, como hojas de cálculo y comunicación por WhatsApp, lo que puede resultar en duplicación de esfuerzos, errores humanos y una experiencia menos eficiente para los usuarios.
Según Chiroque (2024), la digitalización de los procesos administrativos mejora la eficiencia operativa, optimiza la gestión interna y facilita una toma de decisiones más ágil. La automatización de tareas repetitivas permite reducir el margen de error y aprovechar mejor los recursos, lo que puede incrementar la productividad en un 40%, proporcionando a los gimnasios una ventaja competitiva en un entorno cada vez más digitalizado.

#### ¿Cuál es la relación con la persona en cuestión?

El modelo de negocio de FitManager se basa en una suscripción SaaS (Software as a Service), lo que permite una relación directa con los dueños, administradores y entrenadores de gimnasios. A través de nuestra plataforma, ofrecemos una solución integral que optimiza la gestión del gimnasio, con funcionalidades como administración de pagos, reservas, clientes, horarios, y métricas operativas. Esto les permite mejorar la eficiencia y profesionalización de sus operaciones diarias.
Además, aunque los usuarios finales del gimnasio (los clientes) interactúan con FitManager de forma más limitada, principalmente para consultar horarios y realizar reservas. Se benefician de una experiencia más organizada y eficiente. 

#### 1.2.1.2 When

#### ¿Cuándo sucede el problema?

El problema surge principalmente durante las actividades diarias de gestión operativa en los gimnasios, como el control de membresías, la organización de horarios de clases, el seguimiento de pagos y la supervisión del personal. Cuando estas tareas se realizan manualmente o con sistemas poco integrados, se generan errores, pérdida de tiempo y dificultades en la atención al cliente. Este problema se vuelve especialmente notorio durante las horas de mayor demanda, como en la mañana (7:00–10:00 AM) y en la tarde (5:00–9:00 PM), cuando el flujo de usuarios es mayor y la gestión de los recursos debe ser más eficiente (Shrivastava et al., 2022).

#### ¿Cuándo utiliza el cliente el producto?

FitManager es utilizado por dos segmentos principales de clientes en función de sus roles en el gimnasio: dueños, administradores y entrenadores acceden al sistema para gestionar horarios, pagos, recursos y supervisar las métricas operativas, optimizando la organización y comunicación tanto de las clases como del personal, mientras que los usuarios finales (clientes del gimnasio) utilizan la plataforma para consultar horarios, hacer reservas y gestionar sus entrenamientos de manera autónoma.

#### 1.2.1.3. Where

#### ¿Dónde está el cliente cuando usa el producto?

El cliente, ya sea dueño, administrador o entrenador del gimnasio, utiliza la aplicación web principalmente dentro de las instalaciones del gimnasio, ya sea desde una computadora en la recepción o desde un dispositivo móvil mientras gestiona las actividades cotidianas. La plataforma también permite acceso remoto desde cualquier lugar mediante internet, lo que resulta especialmente útil para la supervisión de múltiples sucursales o para la gestión fuera del horario presencial. Aunque el producto está disponible en la nube, la mayor parte de su uso se concentra en el entorno operativo del gimnasio, donde se requiere control inmediato sobre pagos, membresías, organización de clases y horarios (Shrivastava et al., 2022). Los clientes del gimnasio, por otro lado, utilizan FitManager principalmente para consultar horarios de clases, hacer reservas y gestionar sus entrenamientos de forma autónoma desde dispositivos móviles o computadoras, lo que les permite una experiencia más organizada y eficiente al interactuar con el gimnasio.

#### ¿Dónde surge el problema?

El problema se origina en el interior del gimnasio, particularmente en las áreas administrativas y de atención al cliente, donde se realizan tareas como el registro de nuevos usuarios, la programación de clases, el control de pagos y la supervisión de entrenadores. En muchos casos, estas funciones se llevan a cabo de forma manual o con herramientas desorganizadas, lo que genera errores, demoras y pérdidas económicas. De acuerdo con el estudio, los métodos tradicionales limitan la eficiencia operativa y dificultan la escalabilidad de los servicios, afectando tanto a la administración como a la experiencia de los usuarios (Shrivastava et al., 2022).

#### 1.2.1.4. Who

#### ¿Quiénes están involucrados?

Los principales actores involucrados en la problemática que aborda FitManager son los dueños, administradores y entrenadores del gimnasio, quienes enfrentan dificultades operativas debido a la falta de digitalización en la gestión de pagos, horarios, reservas y comunicación. Además, los clientes del gimnasio se ven afectados por la falta de organización y eficiencia en la gestión de reservas y entrenamientos.

#### ¿A quiénes le sucede el problema?

El problema impacta principalmente a los dueños y administradores de los gimnasios, quienes deben lidiar con la desorganización y la ineficiencia operativa. También afecta a los entrenadores y el personal administrativo que se encargan de la programación de clases, seguimiento de clientes y manejo manual de información.

#### ¿Quién lo utilizará?

FitManager será utilizado por los dueños, administradores y entrenadores del gimnasio para gestionar eficientemente las operaciones diarias, optimizar los horarios, la programación de clases, y mejorar la comunicación con los clientes. Los usuarios finales (clientes del gimnasio) también interactuarán con la plataforma, principalmente para consultar horarios, realizar reservas y gestionar sus entrenamientos de manera más sencilla y accesible.

#### 1.2.1.5. Why

#### ¿Cuál es la causa del problema?

Muchos gimnasios de deportes de contacto, levantamiento de pesas y modelos híbridos enfrentan desafíos operativos y financieros debido al uso de métodos tradicionales como papel, Excel o WhatsApp. Esta dependencia genera desorganización en la programación de horarios, dificultades en el seguimiento de pagos y comunicación ineficaz con los clientes, lo que afecta negativamente la retención de miembros y la eficiencia del negocio. Según un informe de Smart Health Clubs (2025), el 50% de los nuevos miembros de gimnasios abandonan en los primeros seis meses, con la mayoría desistiendo después de sólo 90 días .Además, el 67% de las membresías de gimnasios no se utilizan en absoluto o se utilizan muy poco, lo que subraya la necesidad de mejorar la gestión y el compromiso de los miembros.
La falta de herramientas adecuadas para monitorear el desempeño físico de los clientes también limita la personalización de los entrenamientos, reduciendo la satisfacción y fidelización de los miembros. Implementar un software de gestión de gimnasios, como FitManager, puede abordar estos problemas al automatizar procesos clave, mejorar la comunicación y proporcionar análisis detallados del comportamiento de los miembros. Esto no solo optimiza las operaciones internas, sino que también contribuye a aumentar la retención de clientes y la rentabilidad del negocio.

#### 1.2.1.6. How

#### ¿En qué condiciones los clientes usan nuestro producto?

Los principales usuarios de FitManager —dueños, administradores y entrenadores de gimnasios— utilizan la plataforma durante distintos momentos clave del día para gestionar y organizar sus operaciones. Al iniciar la jornada, revisan el calendario dinámico para confirmar clases programadas, reservas y disponibilidad de espacios. A lo largo del día, administran membresías, personalizan planes y hacen seguimiento de pagos. Al cierre, acceden al panel de métricas para evaluar asistencia, ingresos y ocupación, y realizan ajustes en programación, entrenadores o niveles de clase según sea necesario, todo desde una interfaz centralizada y accesible.
Por otro lado, los clientes del gimnasio (usuarios finales) interactúan con FitManager principalmente para consultar horarios, reservar clases y hacer seguimiento de sus entrenamientos. También pueden verificar el estado de sus membresías y pagos, lo que les brinda mayor autonomía y mejora su experiencia dentro del gimnasio. Esta participación directa ayuda a reducir la carga operativa del personal y contribuye a una gestión más ordenada y eficiente.

#### ¿Cómo nos conocieron los compradores?

Los compradores llegan a FitManager a través de contenido informativo y publicitario en redes sociales como Instagram, Facebook y TikTok, enfocado en mostrar las frustraciones comunes de los administradores de gimnasios y cómo solucionarlas con una herramienta digital.
También es frecuente que conozcan la plataforma mediante recomendaciones de otros propietarios que ya la utilizan, especialmente dentro de comunidades de fitness, entrenadores personales o espacios deportivos independientes. Además, algunos descubren FitManager mediante búsquedas en Google relacionadas con soluciones para control de pagos o reservas de clases en gimnasios.

#### ¿Cómo prefieren los lectores acceder a nuestro contenido?

Los clientes acceden a FitManager desde navegadores web en computadoras, tablets o smartphones. Prefieren una experiencia simple, rápida y sin fricciones, con un diseño intuitivo que les permita acceder fácilmente a funciones como el calendario, el registro de clientes, los reportes financieros y el panel de métricas.
La multiplataforma les da la flexibilidad de gestionar su gimnasio desde donde se encuentren, sin depender de una oficina física o dispositivos específicos.      

#### ¿Qué llevó a la persona a llegar a esta situación?

Los usuarios de FitManager suelen haber experimentado desorden en la gestión de su gimnasio debido al uso de métodos manuales (Excel, cuadernos, WhatsApp) para controlar asistencia, pagos, horarios y membresías. Esta falta de integración entre procesos operativos genera errores, retrabajos y pérdida de tiempo, afectando la calidad del servicio y la capacidad de escalar el negocio.
La necesidad de contar con una herramienta que centralice todos estos aspectos, automatice tareas repetitivas y les brinde visibilidad clara sobre el estado de su negocio, los lleva a buscar una solución digital como FitManager. 

#### 1.2.1.7. How much

#### Estadísticas que sustentan la problemática.

En Lima, el 9% de la población se mantiene físicamente activa y un 38% realiza ejercicio de manera ocasional, lo que equivale a más de 4 millones de personas con potencial interés en gimnasios, deportes de combate o entrenamientos personalizados con entrenadores privados (Ipsos, 2024). Este amplio mercado representa una gran oportunidad para los dueños y administradores de gimnasios, quienes necesitan herramientas eficientes para gestionar su negocio y atraer a este público en crecimiento.


##### Figura 1 Estado de actividad física en Lima.

![image](https://github.com/user-attachments/assets/c58e49fb-d825-4231-aeda-4bfde7515c1c)

_Nota._ Casi la mitad de la población de Lima es relevante para este análisis, ya que se enfoca en aquellos que realizan actividad física. No se considera pertinente incluir al 53% restante, que realiza ejercicio de manera ocasional o no lo practica en absoluto. Adaptado de Lima Activa, por Ipsos, 2024 (https://www.ipsos.com/es-pe/lima-activa).

Según García (2024), el 32% de la población no está dispuesta a invertir más de 100 soles en un gimnasio, lo que hace que su opción preferida para mantenerse en forma sean los gimnasios económicos o "de barrio". Precisamente, son estos gimnasios los que enfrentan mayores dificultades en su gestión, lo que representa una oportunidad clave para FitManager, que puede optimizar sus procesos administrativos y mejorar su operación.

##### Figura 2 Presupuesto que destinarán los peruanos para entrenar en un gimnasio.

![image](https://github.com/user-attachments/assets/fdd6fe51-db1e-4ebf-914d-7581260ceb61)

_Nota._ El porcentaje en la columna izquierda representa el porcentaje de la población en 2023, mientras que el gráfico de barras en 2024. Se evidencia que, en la actualidad, el peruano está dispuesto a invertir más en llevar una vida activa. Adaptado de La asistencia a gimnasios, entre la recesión y una mayor disposición al gasto, por Mayumi García, 2024 (https://gestion.pe/economia/empresas/la-asistencia-a-gimnasios-entre-la-recesion-y-una-mayor-disposicion-al-gasto-empresas-peru-inversiones-impronta-research-noticia/)

Según Data Bridge Market Research (2024), se espera que el mercado global de software de gestión de gimnasios experimente un crecimiento constante, alcanzando un valor estimado de USD 32.75 mil millones para el año 2031. Este pronóstico resalta el potencial de expansión del sector, lo que representa una oportunidad clave que debemos aprovechar en el mercado de software para gimnasios.

##### Figura 3 Previsión del Valor del Mercado Global de Software de Gestión de Gimnasios por Región (2024-2031)

![image](https://github.com/user-attachments/assets/26f5b8de-b21a-4f70-879d-bc40c13bf04b)

_Nota._ El gráfico de barras apiladas presenta la previsión del valor del mercado global de software de gestión de gimnasios en miles de millones de dólares estadounidenses (USD) para el periodo 2024-2031, desglosado por región geográfica. Adaptado de Informe de análisis de tamaño, participación y tendencias del mercado global de software de gestión de gimnasios: descripción general de la industria y pronóstico hasta 2031, por Data Bridge Market (https://www.databridgemarketresearch.com/es/reports/global-gym-management-software-market)

#### ¿Cuánto costará resolver el problema?

Desarrollar FitManager, una plataforma web de gestión de gimnasios con funcionalidades como administración de horarios, reservas, pagos, métricas operativas y acceso multirol (administradores, entrenadores y clientes), se ubicaría dentro del rango de una aplicación de complejidad media a alta. Según estimaciones de Guirado (2023), este tipo de app podría costar entre 25.000€ y 50.000€ o más, dependiendo del nivel de personalización, integraciones externas (por ejemplo, pasarelas de pago) y diseño responsive. A esto se deben sumar costos de mantenimiento, alojamiento en la nube y posibles mejoras futuras, que son clave para asegurar su operatividad y escalabilidad a largo plazo. 

### 1.2.2. Lean UX Process

​Lean UX es una metodología ágil que integra principios de diseño centrados en el usuario con procesos iterativos y colaborativos, enfocándose en la experiencia del usuario más que en la documentación extensa. A través de ciclos continuos de creación, medición y aprendizaje, permite validar hipótesis rápidamente mediante experimentos y pruebas de usabilidad, facilitando la adaptación a cambios y la entrega de productos que realmente satisfacen las necesidades de los usuarios. Esta aproximación es útil porque reduce el riesgo de desarrollar funcionalidades innecesarias, mejora la eficiencia del equipo al fomentar la colaboración multidisciplinaria y asegura que el producto final esté alineado con las expectativas y comportamientos reales de los usuarios (Lean UX y Lean Startup: potencia experiencia y diseño de producto, 2023). 

#### 1.2.2.1. Lean UX Problem Statements

FitManager es una plataforma web diseñada específicamente para mejorar la administración de gimnasios, ofreciendo herramientas integradas para gestionar clientes, pagos, horarios de clases y entrenadores, todo desde un solo lugar. Hemos identificado que muchos gimnasios, especialmente los pequeños y de barrio, aún operan utilizando métodos tradicionales y dispersos, como hojas de cálculo, mensajes de WhatsApp o registros en papel. Este enfoque fragmentado genera confusión, errores administrativos y dificultades en la programación, lo que afecta tanto la eficiencia operativa como la experiencia del cliente, quienes enfrentan confusión con los horarios, dificultades para reservar clases y una atención poco personalizada.
Además, los entrenadores suelen tener que gestionar manualmente los horarios, pagos y seguimientos de los miembros, lo que consume mucho tiempo y reduce la calidad de su interacción con los alumnos. ¿Cómo podemos ofrecer una solución digital todo-en-uno que simplifique y automatice estos procesos, permitiendo a los gimnasios manejar su operación de manera más fluida y profesional, mientras mejoran la comunicación, la retención de clientes y la eficiencia del negocio?

#### 1.2.2.2. Lean UX Assumptions

#### Features

* Gestión centralizada de clientes y suscripciones.
* Calendario dinámico con programación y reservas de clases por parte de los usuarios.
* Control automatizado de pagos, vencimientos y notificaciones a clientes.
* Panel administrativo para monitorear asistencia, ingresos y métricas operativas.
* Segmentación de clases por tipo de entrenamiento y nivel de experiencia.
* Acceso multiusuario para permitir gestión por parte de administradores y entrenadores.
* Registro de historial de asistencia y actividad de cada cliente.
* Personalización de planes y membresías según los servicios del gimnasio.
* Acceso web multiplataforma para gestión desde cualquier dispositivo.

#### Business Outcomes

* Incremento en la Retención de Clientes: Lograr que los usuarios (dueños de gimnasios, estudios o entrenadores independientes) continúen utilizando FitManager como herramienta principal de gestión en el largo plazo, convirtiéndose en parte esencial de sus operaciones diarias.
* Optimización Operativa de los Negocios Usando la Plataforma: Reducir el uso de métodos manuales (Excel, papel, WhatsApp) al centralizar procesos clave como pagos, asistencia, reservas y control de membresías, generando mayor eficiencia, menos errores y ahorro de tiempo para los administradores.
* Crecimiento de la Base de Usuarios: Aumentar la cantidad de gimnasios, centros de entrenamiento y entrenadores personales que adoptan FitManager, tanto a nivel local como regional, aprovechando el crecimiento del mercado fitness y el interés por digitalizar procesos.
* Mejora en la Satisfacción de los Clientes del Gimnasio: Al facilitar el acceso a horarios, reservas y seguimiento de entrenamientos a través de una plataforma intuitiva y confiable, se mejora la experiencia del usuario final, lo que incrementa su compromiso, reduce la deserción y contribuye a una percepción positiva del gimnasio.
* Incremento en Ingresos Recurrentes por Suscripción: Impulsar el crecimiento financiero mediante un modelo de suscripción mensual o anual, con opciones escalables que se adapten al tamaño y necesidades del gimnasio.
* Consolidación como Solución de Referencia en el Sector: Posicionar a FitManager como una de las principales herramientas de gestión para gimnasios pequeños y medianos en mercados hispanohablantes, siendo reconocida por su facilidad de uso, accesibilidad y enfoque específico en el sector fitness.

#### User Benefits

* Simplificación de la gestión operativa al centralizar en una sola plataforma el control de clientes, pagos, asistencia y programación de clases, reduciendo el uso de herramientas dispersas como Excel o WhatsApp.
* Mayor control sobre el negocio gracias a paneles de métricas e informes en tiempo real que permiten monitorear ingresos, asistencia, membresías activas y desempeño del gimnasio o estudio.
* Reducción de errores administrativos mediante automatización de cobros, vencimientos y seguimiento de asistencia, lo cual minimiza olvidos, duplicaciones o problemas en los registros manuales.
* Flexibilidad de acceso multiplataforma, permitiendo a los administradores y entrenadores gestionar su espacio desde cualquier dispositivo con conexión a internet, ya sea desde una computadora o un celular.
* Personalización de servicios mediante la creación de planes y membresías adaptadas a las necesidades de cada cliente, facilitando la oferta de entrenamientos diferenciados y especializados.
* Facilidad para escalar el negocio, ya que la plataforma está preparada para crecer con el gimnasio, incorporando múltiples entrenadores, sucursales y tipos de clases sin perder el control de la operación.
* Mejora en la experiencia de los clientes del gimnasio, quienes podrán consultar horarios, reservar clases y gestionar sus entrenamientos de forma autónoma y desde cualquier lugar, promoviendo una relación más activa, cómoda y organizada con el gimnasio.

1. Creo que mis usuarios, dueños, administradores y entrenadores de gimnasios o centros de entrenamiento, desean una solución integral que les permita gestionar su operación de forma más organizada, eficiente y profesional, sin depender de hojas de cálculo, registros manuales o múltiples plataformas dispersas. Al mismo tiempo, sus clientes también buscan una experiencia más clara y accesible, donde puedan consultar horarios, reservar clases y dar seguimiento a sus entrenamientos desde un solo lugar.
2. Esto se puede resolver mediante FitManager, ya que centraliza todas las operaciones administrativas del gimnasio en una sola plataforma: control de pagos, programación de clases, gestión de membresías, historial de asistencia, métricas de rendimiento y más, todo desde un panel web accesible y fácil de usar.
3. Mis usuarios iniciales son dueños de gimnasios pequeños y medianos, estudios de entrenamiento personalizado y entrenadores independientes que gestionan su propio espacio y enfrentan desafíos en la administración diaria de sus negocios. Estos usuarios buscan una solución integral que les permita organizar mejor su operación, optimizar recursos y profesionalizar la experiencia de sus servicios, sin depender de hojas de cálculo, registros manuales o plataformas dispersas. A su vez, los usuarios finales de estos gimnasios, sus clientes, también son usuarios de FitManager, ya que acceden a la plataforma para consultar horarios, reservar clases y gestionar su experiencia de entrenamiento.
4. El valor #1 que un usuario quiere de FitManager es el control centralizado de sus operaciones, lo cual les permite ahorrar tiempo, reducir errores administrativos y enfocarse más en mejorar su servicio al cliente.
5. El usuario también puede obtener el beneficio adicional de escalar su negocio con mayor facilidad, gracias a funciones como el acceso multiusuario, la personalización de planes y el monitoreo de métricas clave para la toma de decisiones.
6. Voy a adquirir la mayoría de mis usuarios mediante estrategias de marketing digital dirigidas en redes sociales y contenido educativo en YouTube sobre gestión de gimnasios, además de posibles alianzas con distribuidores de equipos de entrenamiento y asociaciones deportivas locales.
7. Haré dinero a través de planes de suscripción mensual o anual para los gimnasios, segmentados por funcionalidades o cantidad de usuarios permitidos.
8. Mi competencia principal son otras plataformas de gestión que ofrecen soluciones de administración para centros fitness, pero a menudo están pensadas para mercados más grandes o tienen costos elevados.
9. Los venceremos al enfocarnos en gimnasios independientes y estudios más pequeños, ofreciendo un producto localmente adaptado, más accesible en precio, fácil de implementar y con una curva de aprendizaje mínima para el usuario.
10. Mi mayor riesgo de producto es que los usuarios perciban la plataforma como innecesaria o complicada, prefiriendo seguir usando métodos tradicionales como Excel, agendas físicas o WhatsApp para su gestión diaria.
11. Resolveremos esto mediante una experiencia de usuario simple e intuitiva, acompañada de un onboarding guiado, tutoriales claros, soporte técnico constante y una propuesta de valor que enfatiza el ahorro de tiempo y la profesionalización del negocio.
    
¿Quién es el usuario?
El usuario principal de FitManager son los dueños y administradores de gimnasios independientes, estudios de entrenamiento personalizado y entrenadores que gestionan su propio espacio. También lo utilizan los entrenadores y el personal administrativo que participa en la operación diaria del gimnasio. Los clientes de los gimnasios también se benefician de la plataforma, ya que pueden consultar horarios, realizar reservas y gestionar sus entrenamientos.

¿Dónde encaja nuestro producto, en su trabajo o en su vida?
FitManager se integra directamente en las labores diarias de gestión del gimnasio, permitiendo a los usuarios (dueños, administradores, entrenadores y personal administrativo) organizar clases, manejar pagos, controlar asistencia, segmentar entrenamientos y supervisar el rendimiento del negocio desde un solo lugar. Los clientes de los gimnasios lo utilizan para consultar horarios, hacer reservas y gestionar su experiencia de entrenamiento.

¿Qué problemas tiene nuestro producto y cómo se puede resolver?
Los problemas potenciales del producto pueden incluir una curva de aprendizaje inicial, resistencia al cambio por parte del personal o falta de integración con ciertos sistemas de pago. Estos pueden resolverse mediante una interfaz intuitiva, tutoriales interactivos, soporte técnico constante y compatibilidad con múltiples métodos de pago y plataformas, asegurando también que los clientes de los gimnasios puedan navegar de manera fácil y rápida.

¿Cuándo y cómo es usado nuestro producto?
FitManager se utiliza de forma diaria, tanto desde computadoras como desde dispositivos móviles, para gestionar la operación completa del gimnasio. Los dueños y administradores acceden al panel para revisar métricas y finanzas, mientras que entrenadores y personal administrativo lo usan para programar clases, controlar asistencias y organizar a los clientes.

¿Qué características son importantes?
Las funciones más importantes incluyen: gestión centralizada de clientes y membresías, calendario dinámico con reservas, control automatizado de pagos y vencimientos, panel de métricas operativas, personalización de planes, y acceso multiusuario para distintos roles dentro del gimnasio. Los clientes del gimnasio también se beneficiarán de una visualización clara de horarios, opciones de reservas y su propio historial de entrenamientos.

¿Cómo debe verse nuestro producto y cómo debe comportarse?
FitManager debe tener un diseño moderno, claro y profesional, con una interfaz amigable, adaptable a cualquier dispositivo y de navegación sencilla. Debe comportarse de forma fluida, sin tiempos de carga largos, con respuestas rápidas a las acciones del usuario y funcionalidades que simplifiquen, no compliquen, la gestión diaria del gimnasio, beneficiando tanto a los administradores como a los clientes del gimnasio.

#### 1.2.2.3. Lean UX Hypothesis Statements

1. Creemos que, al centralizar la gestión de pagos, reservas y clientes en una sola plataforma, ayudaremos a los dueños de gimnasios a reducir el uso de herramientas dispersas como Excel o WhatsApp.  
   Sabremos que esto es cierto cuando al menos el 70% de los usuarios de FitManager hayan reemplazado completamente herramientas externas después de un mes de uso.
2. Creemos que, al automatizar cobros, los gimnasios podrán reducir los errores administrativos y olvidos en el cobro de suscripciones.  
   Sabremos que esto es cierto cuando el 80% de los usuarios indiquen tener un mejor control financiero en los primeros 2 meses.
3. Creemos que, al ofrecer un panel con métricas en tiempo real, facilitaremos a los administradores la toma de decisiones basadas en datos.  
   Sabremos que esto es cierto cuando al menos el 65% de los usuarios usen activamente el panel de métricas al menos una vez por semana para analizar el rendimiento del negocio.
4. Creemos que, al mejorar la programación y reserva de clases a través de nuestra plataforma, mejoraremos la organización de horarios y asistencia de los alumnos.  
   Sabremos que esto es cierto cuando el 85% de los gimnasios reportan tener menos conflictos de horarios y mayor asistencia registrada después de utilizar FitManager.
5. Creemos que, al permitir la personalización de planes y membresías, los gimnasios podrán adaptar mejor sus servicios a distintos tipos de clientes.  
   Sabremos que esto es cierto cuando el 50% de los usuarios utilicen funciones de personalización dentro del primer mes.
6. Creemos que, al permitir que los clientes de los gimnasios realicen reservas de clases a través de FitManager, mejoraremos su experiencia y satisfacción general.  
   Sabremos que esto es cierto cuando el 75% de los clientes reporten una mayor facilidad para realizar reservas y gestionar su asistencia a clases dentro del primer mes de uso.

#### 1.2.2.4. Lean UX Canvas

<p align="center">
  <img src="https://github.com/user-attachments/assets/9c449950-4513-43ce-a925-0fc713a7a618" alt="Canvas de FitManager">
</p>

<p align="center">
  <a href="https://drive.google.com/file/d/1s4bRIgJBOXdcWbEElVUIdd4UmPVrTLMN/view?usp=sharing">Link del Canvas</a>
</p>

## 1.3. Propuesta de Valor y Alcance

**Propuesta de valor**

FitManager es una plataforma de gestión integral diseñada para digitalizar y optimizar las operaciones de gimnasios, estudios de entrenamiento personalizado y centros de entrenamiento funcional. Su propuesta de valor se basa en simplificar la administración del negocio mediante herramientas que permiten a los dueños, administradores y entrenadores controlar pagos, membresías, clases, reservas y métricas operativas desde un solo lugar. A través de funcionalidades como el calendario dinámico, el panel de métricas, la gestión personalizada de planes y el registro automatizado de asistencias, FitManager reduce la carga operativa del personal, evita errores humanos y mejora significativamente la experiencia tanto del cliente del gimnasio como de los administradores.

**Alcance**

FitManager no solo se dirige a los dueños y entrenadores que buscan optimizar sus operaciones, sino que también proporciona a los clientes del gimnasio una plataforma sencilla para gestionar sus reservas, horarios y asistencia de manera eficiente. A diferencia de sistemas genéricos o gestión manual en hojas de cálculo, FitManager ofrece una solución especializada para el entorno fitness, accesible desde cualquier dispositivo con conexión a internet. Su flexibilidad y adaptabilidad lo convierten en una herramienta ideal para gimnasios de diferentes tipos, desde espacios pequeños hasta centros de entrenamiento de mayor escala, abarcando diversas disciplinas y necesidades operativas.

## 1.4. Segmentos Objetivo

**Segmento objetivo #1: Dueños, administradores y entrenadores de gimnasios**

Aspectos demográficos:
* Sexo: No definido (tanto hombres como mujeres).
* Rango de edad: 25-50 años.
* Nivel socioeconómico: Medio a alto, debido a la necesidad de inversión en tecnología y la operación de un gimnasio. Este perfil coincide con los responsables de más de 46,000 gimnasios en América Latina, un mercado que genera ingresos por aproximadamente 5,600 millones de dólares anuales (2018, Mercado Fitness).

Aspectos geográficos:
* Nacionalidad: Principalmente de países de habla hispana, aunque se puede adaptar a otros mercados.
* Zona geográfica de residencia: Zonas urbanas y suburbanas, con presencia de gimnasios independientes y centros de entrenamiento. En Perú, por ejemplo, existen más de 1,600 centros de entrenamiento, y grandes cadenas como Smart Fit continúan invirtiendo agresivamente en expansión, con 21 millones de dólares destinados a abrir 14 nuevos gimnasios solo en 2023 (Forbes Perú).

Aspectos psicográficos:
* Intereses: Interés por la optimización de procesos, tecnología aplicada a la gestión, y crecimiento profesional. La digitalización del sector fitness ha sido una tendencia clave en los últimos años, con creciente demanda por plataformas que automaticen reservas, membresías y seguimiento de clientes.
* Estilo de vida: Orientados al negocio, interesados en la mejora continua de sus instalaciones, procesos y la experiencia de sus clientes. Buscan diferenciarse en un mercado competitivo con servicios modernos, eficientes y personalizados.
* Actitudes: Valoran la eficiencia operativa, la automatización de tareas, y la posibilidad de ofrecer un servicio más profesional y organizado. Más del 55% de los latinoamericanos activos prefieren entrenar en gimnasios por razones de eficacia, conveniencia y acceso a buenos equipos, lo que obliga a los administradores a estar en constante innovación (Mercado Fitness, 2024).

**Segmento objetivo #2: Clientes de gimnasios**

Aspectos demográficos:
* Sexo: No definido (tanto hombres como mujeres).
* Rango de edad: 18-45 años, personas activas en la búsqueda de mejorar su salud y estado físico.
* Nivel socioeconómico: Medio a medio-alto, ya que tienen acceso a membresías en gimnasios o centros de entrenamiento. En América Latina, la industria del fitness genera más de 5,600 millones de dólares anuales con una creciente participación de jóvenes adultos (Mercado Fitness, 2019).

Aspectos geográficos:
* Nacionalidad: Principalmente de países de habla hispana.
* Zona geográfica de residencia: Zonas urbanas y suburbanas, donde existe una mayor concentración de gimnasios. En Perú, por ejemplo, las principales cadenas como Smart Fit están ubicadas en Lima Metropolitana y otras ciudades intermedias (Forbes Perú, 2023).

Aspectos psicográficos:
* Intereses: Salud, fitness, bienestar personal, deportes y mejora física. Una encuesta regional muestra que el 55% de los latinoamericanos activos prefiere entrenar en gimnasios, motivados por eficacia (35%), conveniencia (32%) y acceso a equipamiento (29%) (Mercado Fitness, 2024).
* Estilo de vida: Activos, interesados en entrenamientos personalizados y en mantener un estilo de vida saludable. El auge de clases grupales y el entrenamiento funcional responde a estas preferencias (Universidad Nacional de Cuyo, 2019).
* Actitudes: Buscan conveniencia, facilidad para acceder a información sobre horarios, entrenamientos y disponibilidad. Valoran una experiencia organizada en el gimnasio, idealmente mediada por tecnología (Expansión Franquicia, 2017).

# CAPÍTULO 2: REQUIREMENTS ELICITATION & ANALYSIS

## 2.1. Competidores

FitManager compite directamente con plataformas como Mindbody, ClubRight y Booking Ninjas, todas enfocadas en la gestión digital de gimnasios. Mindbody ofrece una solución integral y global, aunque puede resultar compleja y costosa para gimnasios medianos o pequeños. ClubRight destaca por su simplicidad y precios accesibles, pero ofrece menos herramientas avanzadas. Booking Ninjas se enfoca en la automatización empresarial, aunque su implementación puede ser menos intuitiva para gimnasios convencionales. Frente a ellos, FitManager ofrece una alternativa moderna, adaptable a todo tipo de gimnasios y entrenamientos, con una experiencia más ágil y centrada en las necesidades operativas reales.

### 2.1.1. Análisis Competitivo

Tabla 1
*Competitive Anlysis Landscape*

**Competitive Analysis Landscape**
> **¿Por qué llevar a cabo este análisis?**  
> El objetivo de hacer este análisis es comparar a FitManager con competidores clave para identificar sus ventajas competitivas y oportunidades de mejora en el mercado de software para gimnasios.

| Aspecto                    | **FitManager** | **Mindbody** | **ClubRight** | **Booking Ninjas** |
|----------------------------|----------------|--------------|----------------|---------------------|
| **Logo** | <div align="center"><img src="https://github.com/user-attachments/assets/ef4eeb67-c3c1-44ed-a88b-8867457427a5" height="100"/></div> | <div align="center"><img src="https://github.com/user-attachments/assets/6a73ae1f-63d7-4a55-a671-3d1866fb5b32" height="100"/></div> | <div align="center"><img src="https://github.com/user-attachments/assets/5fa9b28b-69e5-496a-b907-9a79fba30fd7" height="100"/></div> | <div align="center"><img src="https://github.com/user-attachments/assets/dce6b339-b62f-4810-a958-b9b036755681" height="100"/></div> |
| **Overview** | Plataforma SaaS para gimnasios de combate, reservas, pagos y métricas. | App global para wellness y fitness (gimnasios, yoga, spas, etc.). | Software para gimnasios con enfoque en pagos y comunidad. | Solución para automatizar operaciones en gimnasios y hoteles. |
| **Ventaja competitiva** | Adaptable a todo tipo de gimnasios, interfaz simple y automatización de gestión y pagos. | Comunidad global y marketing integrado. | Facilidad de uso y soporte personalizado. | Alta personalización e integración con sistemas externos. |
| **Mercado objetivo** | Todo tipo de gimnasios incluyendo de combate, funcionales e híbridos (zonas urbanas). | Centros wellness y estudios de fitness en todo el mundo. | Gimnasios medianos y pequeños del Reino Unido. | Centros fitness que buscan eficiencia operativa. |
| **Estrategias de marketing** | Nicho, publicidad digital, testimonios de entrenadores, alianzas locales. | Marketplace integrado, SEO y publicidad en redes. | Enfoque en relaciones y demostraciones personalizadas. | Marketing de contenido y posicionamiento SEO. |
| **Productos y servicios** | Gestión de clases, reservas, pagos, métricas, notificaciones. | Agendamiento, pagos, marketplace, marketing, apps móviles. | Registro de socios, pagos, reservas, informes. | CRM, reservas, pagos, gestión documental, automatización. |
| **Precios y costos** | Se incluyen todas las funcionalidades por $200 | Starter: $129 <br> Accelerate: $259 <br> Ultimate: $349 <br> Ultimate Plus: $699 | Plan Core: $109 al mes <br> Plan Complete: $169 al mes | Dependiendo de las unidades: <br> 1-5 unidades: $499 <br> 5-50 unidades: $7950 + $1295 al mes |
| **Canales de distribución** | Web responsive. | App móvil y web. | Web app compatible con móviles. | Web y móvil con dashboards personalizables. |
| **Fortalezas** | Especialización, interfaz sencilla, automatización, soporte local. | Ecosistema robusto, comunidad global, app móvil. | Simplicidad, buena relación calidad-precio, soporte. | Flexibilidad, automatización avanzada, integración. |
| **Oportunidades** | Limitado fuera del nicho, dependencia de internet, menor reconocimiento. | Costoso, complejo para nuevos usuarios. | Funcionalidades limitadas en planes básicos. | Precio alto, curva de aprendizaje. |
| **Debilidades** | Diferenciación frente a competidores generalistas y a plataformas con curva de aprendizaje elevada, accesibilidad a pequeños negocios. | Crecimiento global del wellness. | Ampliar funciones y cobertura. | Demanda por automatización y eficiencia post-COVID. |
| **Amenazas** | Competencia de soluciones ya consolidadas en el mercado y opciones gratuitas. | Competencia de nicho y apps locales. | Saturación del mercado. | Adaptabilidad a mercados pequeños o locales. |

### 2.1.2. Estrategias y tácticas frente a los competidores

FitManager se posicionará como una solución especializada en gimnasios de deportes de combate, diferenciándose de competidores generalistas. Para afrontar las fortalezas de otros actores consolidados como Booking Ninjas, Mindbody y ClubRight, aplicará las siguientes estrategias:

#1 Herramientas especializadas para gimnasios y entrenamientos personalizados
* Fortaleza Utilizada: Especialización en gimnasios, automatización.
* Oportunidad Aprovechada: Diferenciación frente a competidores generalistas.
* Descripción: Mientras que plataformas como Mindbody y Booking Ninjas ofrecen soluciones genéricas, FitManager se centrará en herramientas especializadas para gimnasios funcionales y de entrenamiento personalizado. Esto incluirá gestión de sesiones intensivas, planificación de rutinas específicas y control de desempeño físico detallado, adaptándose a las necesidades reales de los entrenadores y sus clientes.

#2 Posicionamiento como solución intuitiva y accesible
* Fortaleza Utilizada: Interfaz sencilla.
* Oportunidad Aprovechada: Diferenciación frente a plataformas con curva de aprendizaje elevada.
* Descripción: A diferencia de competidores como ClubRight, que pueden ser más complejos en su configuración, FitManager destacará por una experiencia de usuario fluida y sin fricciones. Esto facilitará la adopción rápida por parte de los gimnasios, permitiéndoles gestionar sus operaciones sin necesidad de capacitación extensa.

#3 Sistema de métricas y reportes automáticos para mejorar el desempeño
* Fortaleza Utilizada: Automatización.
* Oportunidad Aprovechada: Diferenciación frente a competidores generalistas.
* Descripción: FitManager integrará un sistema avanzado de métricas y reportes automáticos, permitiendo a los entrenadores monitorear el progreso de sus alumnos de manera objetiva. Esta funcionalidad, que no todos los competidores implementan de manera robusta, facilitará la toma de decisiones basadas en datos y mejorará la retención de clientes.

#4 Estructura de precios flexible para gimnasios de todos los tamaños
* Fortaleza Utilizada: Soporte local.
* Oportunidad Aprovechada: Accesibilidad para pequeños negocios.
* Descripción: A diferencia de plataformas con costos elevados o modelos rígidos, FitManager ofrecerá planes escalables según el tamaño del gimnasio. Esto permitirá que tanto pequeños estudios como grandes cadenas accedan a la plataforma sin sacrificar funcionalidad, fomentando la adopción del software en el mercado.

## 2.2. Entrevistas

### 2.2.1. Diseño de entrevistas

**Segmento #1: Dueños, administradores y entrenadores de gimnasios**

Objetivo: Entender sus desafíos y necesidades operativas, especialmente en áreas como programación de clases, gestión de pagos y seguimiento de clientes.
Se tienen las siguientes preguntas, dependiendo de su rol en el gimnasio:

Para quienes se centran en la administración:
1. ¿Cómo gestionan actualmente los pagos, membresías y clases en su gimnasio?
2. ¿Qué tan satisfecho(a) está con su sistema de administración actual?
3. ¿Utilizan actualmente alguna plataforma digital o software para apoyar la gestión del gimnasio? ¿Cuál?
4. ¿Qué problemas han enfrentado al administrar horarios, clases o pagos?
5. ¿Cuánto tiempo dedica su equipo diariamente a tareas administrativas?
6. ¿Ha considerado implementar una solución en la nube que automatice procesos? ¿Por qué sí o por qué no?
7. ¿Qué tan importante considera que es la digitalización para el crecimiento de su gimnasio?
8. ¿Estaría dispuesto(a) a pagar una suscripción mensual si esta solución le ahorra tiempo, errores y esfuerzo? ¿Qué precio considera razonable?
9. ¿Qué funcionalidades cree que serían indispensables en una herramienta de este tipo?

Para quienes se centran en el entrenamiento:
1. ¿Cómo gestionas actualmente tus horarios y clases?
2. ¿Tienes acceso a información actualizada sobre tus clientes o alumnos? ¿Cómo la obtienes?
3. ¿Qué herramientas digitales utilizas actualmente para organizar tu trabajo?
4. ¿Has tenido problemas para coordinar clases, entrenamientos o sesiones con clientes?
5. ¿Cómo te comunicas normalmente con los administradores del gimnasio?
6. ¿Qué tan útil sería para ti tener una plataforma que centraliza tus horarios, disponibilidad y datos de tus clientes?
7. ¿Crees que una herramienta así te ayudaría a trabajar mejor? ¿Por qué?
8. ¿Qué funcionalidades te parecerían más valiosas en una aplicación pensada para entrenadores?

**Segmento #2: Clientes de gimnasios**
Objetivo: Entender sus necesidades y expectativas en relación con la gestión de reservas, horarios y entrenamientos

1. ¿Cómo te informas actualmente sobre los horarios de clases o la disponibilidad de entrenadores en tu gimnasio?
2. ¿Has tenido alguna vez problemas por falta de información o cambios inesperados en los horarios?
3. ¿Qué tan útil sería para ti poder reservar tu espacio en el gimnasio o una clase con anticipación desde tu celular?
4. ¿Crees que tu experiencia mejoraría si tu entrenador pudiera seguir tu progreso físico y adaptar tus rutinas según eso?
5. ¿Te interesaría usar una app donde puedas ver los horarios del gimnasio, la disponibilidad de entrenadores y hacer tus reservas fácilmente?
6. ¿Con qué frecuencia asistes al gimnasio y qué factores influyen en que mantengas esa constancia?
7. ¿Qué aspectos de la experiencia en tu gimnasio crees que podrían mejorarse con tecnología?

### 2.2.2. Registro de entrevistas

**Segmento #1: Dueños, administradores y entrenadores de gimnasios**

**Entrevistado N°1: Gonzalo Carhuanconte**
* Edad: 25
* Distrito: Los Olivos
* Link: [Entrevistas FitManager](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD)
* Instante en el que inicia: 0:01
* Duración: 4:48

<p align="center">
  <img src="https://github.com/user-attachments/assets/73bbf2df-25de-4e44-bc11-925c7756c117" alt="Entrevista Gonzalo Carhuanconte">
</p>


Resumen:

Gonzalo Carhuanconte, administrador de un gimnasio pequeño, gestiona pagos, membresías y clases de forma manual, utilizando herramientas como Excel y WhatsApp, lo que le genera errores, pérdida de tiempo y desorganización. Aunque reconoce la importancia de digitalizar su negocio, no ha utilizado software especializado debido a su complejidad, idioma o costo. Dedica entre 1 y 2 horas diarias a tareas administrativas y enfrenta problemas frecuentes al coordinar horarios y controlar pagos. Está abierto a usar una solución en la nube si es accesible, simple y está en español, y considera justo pagar entre 40 y 80 soles mensuales por un sistema que le ahorre tiempo y esfuerzo. Valora especialmente funcionalidades como el control automatizado de pagos, la gestión de horarios, alertas, reportes y la compatibilidad con medios de pago locales.

**Entrevistado N°2: Carlos Martel**
* Edad: 53
* Distrito: Pueblo libre
* Link: [Entrevistas FitManager](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD)
* Instante en el que inicia: 4:49
* Duración: 3:14

<p align="center">
  <img src="https://github.com/user-attachments/assets/d8c4e113-c53d-4f92-a23b-17125f6f59e3" alt="Entrevista Carlos Martel">
</p>

Resumen:

Carlos Martel administra y entrena un gimnasio enfocado en artes marciales y preparación física. Actualmente gestiona su negocio principalmente con Excel, pero considera que no es una solución efectiva, ya que le hace perder tiempo valioso y no le permite llevar un control óptimo. Recibe pagos en múltiples formatos (Yape, Plin, tarjeta, transferencia y efectivo), lo cual complica aún más la administración. Comenta que en verano, debido al aumento de personas, la situación se vuelve más caótica. Está interesado en una herramienta digital que le permita visualizar todo desde una app, automatizar alertas de pagos pendientes o por vencer y facilitar la gestión diaria. Cree que las soluciones digitales están en tendencia, especialmente para captar clientes por redes sociales, y estaría dispuesto a pagar una suscripción mensual de hasta 150 soles, siempre que el sistema realmente lo ayude a mejorar su operación.

**Entrevistado N°3: Tsuyoshi Arakaki**
* Edad: 22
* Distrito: San Juan de Lurigancho
* Link: [Entrevistas FitManager](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD)
* Instante en el que inicia: 8:03
* Duración: 6:46

<p align="center">
  <img src="https://github.com/user-attachments/assets/ac0c891d-4b32-4fef-8174-cafa7b3af3b1" alt="Entrevista Tsuyoshi Arakaki">
</p>

Resumen: 

Tsuyoshi Arakaki ayuda en la gestión del gimnasio de su tío. Actualmente, la comunicación con los clientes se realiza manualmente por WhatsApp, avisándoles uno por uno cuánto deben pagar. Los pagos se hacen por Yape o Plin, y cada entrenador gestiona sus clases en su propio archivo de Excel, lo que genera desorganización. Tsuyoshi le dedica entre una y dos horas diarias a estas tareas porque estudia, pero en vacaciones le dedica más tiempo. Considera que una solución en la nube que automatice estos procesos, especialmente los pagos y la organización de clases, sería muy útil. Destaca que la digitalización es clave para el crecimiento del gimnasio y, aunque no tiene poder de decisión, estima que una suscripción mensual de hasta 300 soles podría ser viable si la herramienta realmente facilita la gestión.

**Entrevistado N°4: Piero Ramirez**
* Edad: 19
* Distrito: Magdalena del Mar
* Link: [Entrevistas FitManager](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD)
* Instante en el que inicia: 14:49
* Duración: 3:37

<p align="center">
  <img src="https://github.com/user-attachments/assets/0c25f18d-94d2-40ea-a849-307091ffb219" alt="Entrevista Piero Ramirez">
</p>

Resumen: 

Piero Ramírez trabaja como entrenador part-time en Viva Fitness y disfruta mucho de su labor. Actualmente, gestiona sus horarios mediante tablas en Excel y coordina actividades por números de WhatsApp, lo cual considera poco práctico. Para acceder a la información de los clientes, recurre a archivos de Drive o Excel, lo que le resulta problemático y poco eficiente. La comunicación con los administradores del gimnasio también se realiza vía WhatsApp, lo que fragmenta aún más la gestión. Considera que una plataforma que centralice toda esta información mejoraría significativamente su trabajo, especialmente en la organización de horarios y seguimiento de clientes. Para él, una buena app debería incluir datos relevantes de cada cliente, como historial, objetivos y salud, que le permitan diseñar rutinas más personalizadas y efectivas.

**Entrevistado N°5: Christian Valer**
* Edad: 24
* Distrito: Magdalena del Mar
* Link: [Entrevistas FitManager](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD)
* Instante en el que inicia: 18:25
* Duración: 3:52

<p align="center">
  <img src="https://github.com/user-attachments/assets/2908fffd-d4c7-4531-b3c4-6c4a15f9990c" alt="Entrevista Christian Valer">
</p>

Resumen:

Christian Valer es coach en un gimnasio y actualmente organiza sus clases utilizando WhatsApp y Google Calendar, mientras que el seguimiento del progreso de sus clientes lo realiza por mensajes. Aunque usa ambas herramientas, reconoce que tenerlas por separado le genera problemas: se le pueden pasar sesiones, hay cambios de última hora y olvidos de confirmación que provocan espacios vacíos o superposición de clases. La comunicación con los administradores también se da por WhatsApp. Considera que sería muy útil tener todo en un solo lugar, ya que ahorraría tiempo, mejoraría la coordinación y le daría acceso directo a la disponibilidad de clases y a los datos de los clientes. Piensa que una solución así evitaría errores, permitiría dejar de revisar varias apps al mismo tiempo y le daría una visión más clara para brindar un mejor servicio. Para él, lo esencial sería incluir gestión de horarios, sistema de seguimiento de clientes, recordatorios automáticos y acceso a información relevante sobre la salud de los alumnos.

**Segmento #2: Clientes de gimnasios**

**Entrevistado N.º 6: Mateo Cadillo**
* Edad: 17
* Distrito: San Borja
* Link: [Entrevistas FitManager](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD)
* Instante en el que inicia: 22:17
* Duración: 5:13

<p align="center">
  <img src="https://github.com/user-attachments/assets/ed7728e8-153f-473e-ac47-e9513ba148cf" alt="Entrevista Mateo Cadillo">
</p>

Resumen: 

Mateo Cadillo, estudiante universitario de 17 años, asiste al gimnasio de lunes a viernes y considera que su constancia se basa más en la disciplina que en la motivación. Actualmente se informa sobre los horarios y disponibilidad de entrenadores a través de un grupo de WhatsApp, pero ha tenido problemas debido a cancelaciones de último minuto y falta de comunicación clara. Considera que una plataforma web o app sería mucho más útil y ordenada para consultar horarios, disponibilidad y realizar reservas. También valora que su entrenador pueda hacerle seguimiento a su progreso físico, ya que esto le permitiría mejorar su rendimiento y ajustar rutinas según su evolución.

**Entrevistado N.º 7: Franco Rios**
* Edad: 19
* Distrito: San Miguel
* Link: [Entrevistas FitManager](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD)
* Instante en el que inicia: 27:51
* Duración: 4:09

<p align="center">
  <img src="https://github.com/user-attachments/assets/619cee21-c596-4056-b794-e79cb9cefbdf" alt="Entrevista Franco Rios">
</p>

Resumen:

Franco Ríos Rivera es un entrenador de gimnasio, pero también es cliente del mismo. Utiliza principalmente el calendario de su celular y una libreta para apuntar los horarios de sus clases. Aunque este sistema manual le ha funcionado, ha experimentado problemas como cancelaciones de clases no notificadas, cambios de horarios y la sobrecarga de tareas que podrían automatizarse. Considera que una app que permita gestionar reservas y horarios de manera centralizada sería muy útil y profesional, ayudándole a evitar confusiones y a ahorrar tiempo. Además, cree que la tecnología podría mejorar las rutinas personalizadas y el registro de entrada al gimnasio. Franco, quien asiste al gimnasio todos los días por disciplina y por disfrute, también valora que su progreso físico sea seguido de manera más detallada por su entrenador.

**Entrevistado N.º 8: Leonardo Ames**
* Edad: 19
* Distrito: Pueblo Libre
* Link: [Entrevistas FitManager](https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD)
* Instante en el que inicia: 32:25
* Duración: 3:26

<p align="center">
  <img src="https://github.com/user-attachments/assets/530005cf-8bca-429c-afdf-902c1a637f87" alt="Entrevista Leonardo Ames">
</p>

Resumen:

Leonardo Ames asiste al gimnasio entre 4 y 5 veces por semana y se considera constante, aunque su asistencia depende de los horarios de clases en la universidad. Señala que, en ocasiones, no sabe si el gimnasio estará disponible o saturado, lo que le genera incertidumbre al momento de planificar sus visitas. Le gustaría poder reservar su espacio con anticipación desde el celular y tener visibilidad en tiempo real sobre la disponibilidad del gimnasio. Además, considera que sería muy beneficioso que un entrenador pudiera hacer seguimiento de su progreso físico para adaptar mejor sus rutinas. Mencionó que una app que le permita ver horarios, disponibilidad y gestionar sus reservas fácilmente mejoraría significativamente su experiencia. También cree que la tecnología puede aportar valor al permitir un mejor seguimiento del progreso físico, personalizar rutinas y monitorear aspectos como la alimentación.

### 2.2.3. Análisis de entrevistas

**Segmento #1: Dueños, administradores y entrenadores de gimnasios**

Hallazgos:

Los entrevistados coinciden en que la gestión actual de sus gimnasios o labores como entrenadores se apoya en herramientas dispersas como Excel, WhatsApp y Google Calendar, lo que genera desorganización, pérdida de tiempo y errores administrativos. El proceso de control de pagos es manual, con medios variados como Yape, Plin, efectivo y transferencias, lo que complica el seguimiento. Además, la comunicación con clientes y entre personal es fragmentada, afectando la coordinación diaria. Todos valoran una solución centralizada que les permita automatizar cobros, organizar horarios, acceder a datos de clientes y reducir el número de herramientas que deben revisar a diario. La disposición a pagar por una plataforma digital varía, pero es alta si el sistema es simple, en español y resuelve realmente sus problemas operativos.

Conclusiones:

Existe una clara necesidad de digitalizar la gestión operativa de los gimnasios y entrenadores, especialmente en tareas como pagos, programación de clases y seguimiento de clientes. Tanto administradores como entrenadores muestran una fuerte apertura hacia soluciones tecnológicas, siempre que sean accesibles, intuitivas y funcionales. FitManager tiene la oportunidad de posicionarse como una herramienta esencial que centraliza las operaciones diarias, mejora la experiencia del cliente final y reduce significativamente la carga operativa del personal, ofreciendo valor real y tangible desde el primer uso.

**Segmento #2: Clientes de gimnasios**

Hallazgos:

Los tres participantes coinciden en la necesidad de una solución digital que facilite la gestión de horarios, reservas y seguimiento de su progreso físico. Actualmente, todos dependen de sistemas manuales como WhatsApp, calendarios y libretas, los cuales no son eficientes y generan problemas de comunicación, como cancelaciones de última hora y falta de claridad en la disponibilidad de entrenadores. Mateo, Franco y Leonardo valoran una plataforma web o app que centralice esta información y les permita reservar con anticipación, consultar la disponibilidad en tiempo real y evitar confusiones. Además, todos consideran que el seguimiento del progreso físico por parte de los entrenadores sería un beneficio significativo, ya que les permitiría ajustar sus rutinas de forma más efectiva y personalizada.

Conclusiones:

Los clientes entrevistados muestran una fuerte necesidad de una solución tecnológica que optimice su experiencia en el gimnasio. Una plataforma que ofrezca funcionalidades como la visualización de horarios, la gestión de reservas, y el seguimiento del progreso físico sería altamente valorada, ya que resolvería los problemas de comunicación y organización actuales. Además, la automatización de tareas, como la gestión de horarios y el registro de asistencia, permitiría ahorrar tiempo y evitar errores. En general, la implementación de una app o web no solo mejoraría la experiencia diaria de los clientes, sino que también contribuiría a una gestión más profesional y eficiente de las actividades dentro del gimnasio.

## 2.3. Needfinding

### 2.3.1. User Personas

Las siguientes fichas User Persona representan de manera semi-ficticia a los usuarios ideales de FitManager, basándose en nuestros hallazgos en las entrevistas. Se resumen datos clave, como edad, ocupación y objetivos. Es útil para el proyecto porque nos permitirá diseñar una solución centrada en el usuario, entendiendo mejor sus problemas reales, motivaciones y contexto, lo que ayuda a tomar decisiones más acertadas en el desarrollo del producto, priorización de funcionalidades y mejora de la experiencia general.

**Segmento #1: Dueños, administradores y entrenadores de gimnasios**

<p align="center">
  <img src="https://github.com/user-attachments/assets/186dea7a-8114-4382-8966-9b45d57fecf6" alt="USER PERSONA - SEGMENTO #1">
</p>

**Segmento #2: Clientes de gimnasios**

<p align="center">
  <img src="https://github.com/user-attachments/assets/5d9f8bc1-a979-4cf4-b442-ef6cdb5e03f8" alt="USER PERSONA - SEGMENTO #2">
</p>

### 2.3.2. User Task Matrix

| Tarea                                                              | Daniel Muñoz |              | Sebastián Ramírez |              |
|--------------------------------------------------------------------|--------------|--------------|-------------------|--------------|
|                                                                    | Frecuencia   | Importancia  | Frecuencia        | Importancia  |
| Visualizar horarios y clases del gimnasio                          | Con frecuencia | Alta        | Rara vez          | Media        |
| Visualizar disponibilidad de entrenadores y espacios               | Con frecuencia | Alta        | Con frecuencia    | Alta         |
| Reservar clases y entrenamientos                                   | Con frecuencia | Alta        | Con frecuencia    | Alta         |
| Consultar rutinas de entrenamiento personalizadas                  | Con frecuencia | Alta        | Con frecuencia    | Alta         |
| Registrar y visualizar el progreso físico                          | A veces        | Alta        | Con frecuencia    | Alta         |
| Acceder al historial de asistencia                                 | A veces        | Media       | Rara vez          | Baja         |
| Recibir notificaciones sobre cambios de horario                    | Rara vez       | Baja        | Con frecuencia    | Alta         |
| Gestionar pagos y membresías desde la app                          | Con frecuencia | Alta        | A veces           | Media        |
| Contactar fácilmente con entrenadores o el gimnasio                | A veces        | Media       | A veces           | Alta         |

### 2.3.3. User Journey Mapping

**Segmento #1: Dueños, administradores y entrenadores de gimnasios**
<p align="center">
  <img src="https://github.com/user-attachments/assets/404af6c2-b3d3-49b1-9cd6-65783907791a" alt="USER JOURNEY MAP - SEGMENTO #1">
</p>

**Segmento #2: Clientes de gimnasios**
<p align="center">
  <img src="https://github.com/user-attachments/assets/1e228f47-690a-437f-be19-dd78af876aa9" alt="USER JOURNEY MAP - SEGMENTO #2">
</p>

### 2.3.4. Empathy Mapping

**Segmento #1: Dueños, administradores y entrenadores de gimnasios**
<p align="center">
  <img src="https://github.com/user-attachments/assets/0d8c6f0d-043b-4797-8319-5a253c7221d2" alt="EMPHATY MAP - SEGMENTO #1">

**Segmento #2: Clientes de gimnasios**
<p align="center">
  <img src="https://github.com/user-attachments/assets/b08c192b-a03c-4450-baf8-e2823e1311e0" alt="EMPHATY MAP - SEGMENTO #2">
</p>

### 2.3.5. As-Is Scenario Mapping

**Segmento #1: Dueños, administradores y entrenadores de gimnasios**
<p align="center">
  <img src="https://github.com/user-attachments/assets/5ab60ca6-ab6d-4f74-b42f-549cc226669a" alt="AS IS SCENARIO - SEGMENTO #1">

**Segmento #2: Clientes de gimnasios**
<p align="center">
  <img src="https://github.com/user-attachments/assets/8e3ac3fd-613a-4ddf-8579-55d09750f611" alt="AS IS SCENARIO - SEGMENTO #2">
</p>

## 2.4 Ubiquitous Language

Lista de Términos

* **Miembro**  
  * Usuario registrado en el gimnasio con acceso a reservas y seguimiento.  
  * *Sinónimos a evitar:* "Cliente" (en contextos técnicos).

* **Entrenador**  
  * Personal que imparte clases o sesiones personalizadas.  
  * *Diferenciar de:* "Staff" (roles no instructivos como recepción o limpieza).

* **Clase**  
  * Sesión grupal o individual con horario fijo (ej: Yoga, CrossFit).  
  * *No confundir con:* "Sesión" (término genérico que puede referirse también a login).

* **Reserva**  
  * Cupo asignado a un miembro para una clase específica.  
  * *Distinto de:* "Registro" (proceso de alta en el sistema).

* **Asistencia**  
  * Registro de presencia física en una clase.

* **Membresía**  
  * Plan de suscripción activo/inactivo de un miembro.  
  * *Estados posibles:* Activa, Vencida, Pendiente de pago.

* **Cupo**  
  * Espacio disponible en una clase (ej: "5/10 cupos").  
  * *Uso exclusivo:* Capacidad máxima de participantes.

* **Panel**  
  * Vista principal con métricas resumidas para administradores.  
  * *Término técnico:* "Dashboard" (solo en código).

* **Administrador**  
  * Usuario con permisos para gestionar toda la plataforma.  
  * *No usar:* "Manager" (reservado para gimnasios con múltiples sedes).

* **Monto**  
  * Cantidad de dinero.  
  * *Evitar términos como:* “Precio” (más adecuado para mostrar al público) o “Tarifa” (cuando se refiere a categorías o planes).
# CAPÍTULO 3: REQUIREMENTS SPECIFICATION

## 3.1. To-Be Scenario Mapping

**Segmento #1: Dueños, administradores y entrenadores de gimnasios**
<p align="center">
  <img src="https://github.com/user-attachments/assets/dde9f222-dca2-4df5-bce5-a205354b0f7d" alt="TO BE SCENARIO - SEGMENTO #1">

**Segmento #2: Clientes de gimnasios**
<p align="center">
  <img src="https://github.com/user-attachments/assets/c47ffe70-988c-4556-b391-a3ef1af575a9" alt="TO BE SCENARIO - SEGMENTO #2">
</p>

## 3.2. User Stories

### 3.2.1. Requisitos

**Requisitos Funcionales**
| Código   | Requisito                                                                 |
|----------|---------------------------------------------------------------------------|
| RFU-01   | Visualización de horarios en calendario                                   |
| RFU-02   | Modificación de horarios por administradores                              |
| RFU-03   | Notificación por cambio de horario                                        |
| RFU-04   | Reserva de clases por parte de clientes                                   |
| RFU-05   | Cancelación de reservas por parte de clientes                             |
| RFU-06   | Registro del progreso físico del cliente                                  |
| RFU-07   | Visualización de progreso físico del cliente                              |
| RFU-08   | Visualización de rutina personalizada                                     |
| RFU-09   | Gestión de pagos de clientes por parte del administrador                  |
| RFU-10   | Resaltar membresías vencidas o próximas a vencer                          |
| RFU-11   | Pago de membresía desde la app                                            |
| RFU-12   | Confirmación de pago                                                      |
| RFU-13   | Registro de nuevos clientes                                               |
| RFU-14   | Consulta del historial de asistencias por parte del entrenador            |
| RFU-15   | Visualización de detalles de asistencia                                   |
| RFU-16   | Registro de personal por parte del administrador                          |
| RFU-17   | Gestión del personal del gimnasio                                         |
| RFU-18   | Actualización de horario del personal                                     |
| RFU-19   | Notificaciones administrativas para entrenadores y administradores        |
| RFU-20   | Notificaciones personales para clientes                                   |
| RFU-21   | Configuración de notificaciones por parte del cliente                     |
| RFU-22   | Visualización de características de la plataforma en el Landing Page      |
| RFU-23   | Visualización de beneficios de FitManager en el Landing Page              |
| RFU-24   | Registro para solicitar demo personalizada                                |
| RFU-25   | Detalle de funcionalidades por paquete                                    |

**Requisitos No Funcionales**
| Código    | Requisito                          |
|-----------|------------------------------------|
| RNFU-01   | Disponibilidad del sistema         |
| RNFU-02   | Tiempo de respuesta                |
| RNFU-03   | Escalabilidad                      |
| RNFU-04   | Seguridad de la información        |
| RNFU-05   | Accesibilidad multiplataforma      |
| RNFU-06   | Encriptación de pagos              |
| RNFU-07   | Notificaciones configurables       |
| RNFU-08   | Interfaz intuitiva                 |
| RNFU-09   | Compatibilidad API                 |

### 3.2.2. Historias de Usuario

| **User Story ID** | US01 |
|-------------------|------|
| **Epic ID** | EP01 |
| **Title** | Visualización de horarios |
| **Description** | Como usuario, quiero acceder a un calendario con los horarios de todas las clases para planificar fácilmente la programación y disponibilidad. |
| **Acceptance Criteria #1** | Dado que el usuario está en nuestra aplicación web <br> Cuando selecciona la opción “Horarios” <br> Entonces el sistema muestra un calendario con las clases programadas y entrenadores asignados. |
| **Acceptance Criteria #2** | Dado que un entrenador no está disponible <br> Cuando el administrador realiza el cambio de horario <br> Entonces el cambio se refleja en tiempo real para todos los usuarios. |


| **User Story ID** | US02 |
|-------------------|------|
| **Epic ID** | EP01 |
| **Title** | Gestión de calendario |
| **Description** | Como administrador, quiero poder gestionar y modificar la información mostrada en el calendario de clases, incluyendo la adición de nuevas clases y la visualización de la programación, para asegurar que los clientes siempre tengan una visión clara y actualizada de la disponibilidad de las clases. |
| **Acceptance Criteria #1** | Dado que el administrador accede a la vista del calendario de clases <br> Cuando añade una nueva clase a un día específico <br> Entonces la nueva clase se muestra correctamente en el calendario mensual y en la vista de clases del día para todos los usuarios en tiempo real |
| **Acceptance Criteria #2** | Dado que el administrador modifica la información de una clase existente (por ejemplo, horario, instructor, nombre) visible en el calendario <br> Cuando se guardan los cambios <br> Entonces la información actualizada de la clase se refleja correctamente en el calendario mensual y en la vista de clases del día para todos los usuarios en tiempo real |

| **User Story ID** | US03 |
|-------------------|------|
| **Epic ID** | EP01 |
| **Title** | Reserva de clases |
| **Description** | Como cliente, quiero poder reservar clases desde mi celular o web para asegurar mi cupo sin tener que llamar o hacer fila. |
| **Acceptance Criteria #1** | Dado que el cliente desea confirmar su asistencia a una clase <br> Cuando accede a la sección “Clases” <br> Y selecciona una clase disponible <br> Y presiona el botón “Reservar” <br> Entonces el sistema confirma su reserva y le muestra un mensaje de confirmación junto con los detalles de la clase. |
| **Acceptance Criteria #2** | Dado que el cliente no podrá asistir a una clase previamente reservada <br> Cuando accede a la sección “Clases” <br> Y selecciona la clase correspondiente <br> Y cancela su reserva <br> Entonces el sistema libera automáticamente ese cupo y lo pone disponible para otros usuarios. |

| **User Story ID** | US04 |
|-------------------|------|
| **Epic ID** | EP02 |
| **Title** | Registrar y consultar el progreso físico |
| **Description** | Como cliente, quiero registrar y visualizar mi progreso físico dentro de la app para evaluar mi evolución y mantenerme motivado. |
| **Acceptance Criteria #1** | Dado que el cliente quiere registrar su progreso físico <br> Cuando accede a la sección “Progreso” <br> Y selecciona “Nuevo registro” <br> Entonces el sistema le permite ingresar datos como peso, medidas corporales, porcentaje de grasa y rendimiento en ejercicios clave. |
| **Acceptance Criteria #2** | Dado que el cliente ha registrado su progreso físico anteriormente <br> Cuando accede a la sección “Progreso” <br> Entonces el sistema muestra una gráfica comparativa con la evolución de sus datos a lo largo del tiempo. |

| **User Story ID** | US05 |
|-------------------|------|
| **Epic ID** | EP02 |
| **Title** | Visualizar rutina personalizada |
| **Description** | Como cliente, quiero ver mi rutina personalizada de entrenamiento en la plataforma para seguirla paso a paso durante mis sesiones. |
| **Acceptance Criteria #1** | Dado que el cliente tiene una rutina asignada por su entrenador <br> Cuando accede a la sección “Mi rutina” en la app <br> Entonces puede visualizar su rutina organizada por días, con ejercicios, repeticiones, series y tiempo de descanso. |
| **Acceptance Criteria #2** | Dado que el cliente completa una sesión de entrenamiento <br> Cuando marca la rutina del día como “completada” <br> Entonces el sistema registra el progreso y lo asocia a su historial de actividad. |

| **User Story ID** | US06 |
|-------------------|------|
| **Epic ID** | EP03 |
| **Title** | Gestionar finanzas |
| **Description** | Como administrador del gimnasio, quiero ver y gestionar las finanzas del gimnasio para tener un control completo sobre los ingresos, egresos y el estado financiero del negocio. |
| **Acceptance Criteria #1** | Dado que el dueño del gimnasio accede a la sección de transacciones <br> Cuando consulta los pagos realizados <br> Entonces debe poder ver una lista con los pagos de membresías efectuados por los clientes, incluyendo el nombre del cliente, monto abonado, fecha y tipo de membresía. |
| **Acceptance Criteria #2** | Dado que el dueño del gimnasio entra en la sección de transacciones <br> Cuando revisa los egresos registrados <br> Entonces debe poder ver un desglose de los pagos realizados por sueldos, compras de insumos y otros gastos operativos, con la fecha y monto de cada transacción. |
| **Acceptance Criteria #3** | Dado que el dueño del gimnasio accede a la sección de resúmenes financieros <br> Cuando selecciona la opción para ver los ingresos y egresos del mes o del año <br> Entonces debe poder consultar un resumen detallado de los ingresos totales, gastos y el balance neto, con la opción de filtrar por mes o año. |

| **User Story ID** | US07 |
|-------------------|------|
| **Epic ID** | EP03 |
| **Title** | Realizar pagos de membresía desde la app |
| **Description** | Como cliente del gimnasio, quiero pagar mi membresía desde la app usando mi tarjeta o billetera digital para mantener mi suscripción activa fácilmente. |
| **Acceptance Criteria #1** | Dado que el cliente tiene una membresía activa o próxima a vencer, <br> Cuando ingresa a la sección “Mi membresía”, <br> Entonces el sistema muestra el monto, fecha de vencimiento y opciones de pago (tarjeta, Yape, Plin, etc.). |
| **Acceptance Criteria #2** | Dado que el cliente elige un método de pago, <br> Cuando completa los datos requeridos y confirma la transacción, <br> Entonces el sistema procesa el pago, actualiza el estado de su membresía y envía una confirmación. |

| **User Story ID** | US08 |
|-------------------|------|
| **Epic ID** | EP04 |
| **Title** | Registrar nuevo cliente |
| **Description** | Como cliente, quiero poder crear mi perfil para llevar un control de mi información personal y actividad dentro del gimnasio. |
| **Acceptance Criteria #1** | Dado que el cliente accede a la plataforma de registro, <br> Cuando el cliente ingresa su información básica (nombre, correo electrónico, número de teléfono), <br> Entonces el sistema valida y guarda los datos para crear un perfil de cliente. |
| **Acceptance Criteria #2** | Dado que el cliente ha creado su perfil, <br> Cuando el cliente se registra exitosamente, <br> Entonces el sistema le confirma la creación del perfil y lo redirige al panel principal donde puede comenzar a consultar horarios de clases, reservar, y ver su progreso. |

| **User Story ID** | US09 |
|-------------------|------|
| **Epic ID** | EP04 |
| **Title** | Consultar historial de asistencias general |
| **Description** | Como entrenador, quiero poder ver un historial general de asistencias de todos los clientes para analizar tendencias de asistencia, evaluar el compromiso de los miembros y ajustar las clases según la demanda. |
| **Acceptance Criteria #1** | Dado que el entrenador está en la sección de historial de asistencias <br> Cuando selecciona la opción para ver el historial general de asistencias <br> Entonces el sistema muestra un resumen visual con un mapa de calor de la semana que indica los días con mayor y menor asistencia, y un resumen de las asistencias por semana. |
| **Acceptance Criteria #2** | Dado que el entrenador quiere analizar el compromiso de los clientes <br> Cuando revisa el resumen histórico de asistencias <br> Entonces el sistema debe mostrar un datos estadísticos relacionados a la asistencia del gimnasio |

| **User Story ID** | US10 |
|-------------------|------|
| **Epic ID** | EP04 |
| **Title** | Gestionar clases |
| **Description** | Como administrador del gimnasio, quiero poder gestionar las clases ofrecidas por el gimnasio para mantener actualizada la programación. |
| **Acceptance Criteria #1** | Dado que el administrador accede a la sección de gestión de clases <br> Cuando se carga la vista <br> Entonces el sistema muestra una lista de clases existentes con información como nombre, horario, entrenador asignado y capacidad. |
| **Acceptance Criteria #2** | Dado que el administrador desea agregar una nueva clase al cronograma <br> Cuando selecciona la opción para crear clase <br> Entonces el sistema permite ingresar los datos necesarios (nombre, fecha, hora, entrenador, capacidad, duración) y guardar el nuevo registro. |
| **Acceptance Criteria #3** | Dado que el administrador necesita modificar una clase programada <br> Cuando hace clic en “editar” sobre una clase específica <br> Entonces el sistema permite modificar los campos disponibles y actualizar la información correctamente. |

| **User Story ID** | US11 |
|-------------------|------|
| **Epic ID** | EP04 |
| **Title** | Gestionar personal del gimnasio |
| **Description** | Como administrador del gimnasio, quiero poder gestionar al personal del gimnasio para mantener un control organizado sobre los entrenadores y otros empleados. |
| **Acceptance Criteria #1** | Dado que el administrador accede a la sección de gestión de personal <br> Cuando se carga la vista <br> Entonces el sistema muestra una lista del personal actual con su nombre, rol (entrenador, recepcionista, etc.) y estado activo/inactivo. |
| **Acceptance Criteria #2** | Dado que el administrador desea registrar a un nuevo miembro del personal <br> Cuando selecciona la opción para agregar personal <br> Entonces el sistema permite ingresar la información correspondiente (nombre, rol, contacto, estado) y guardar el nuevo registro. |

| **User Story ID** | US12 |
|-------------------|------|
| **Epic ID** | EP05 |
| **Title** | Notificaciones sobre actualizaciones administrativas |
| **Description** | Como administrador o entrenador, quiero recibir notificaciones administrativas relevantes para estar informado sobre eventos importantes relacionados a la operación del gimnasio. |
| **Acceptance Criteria #1** | Dado que un cliente se inscribe en una clase que será dictada por el entrenador, <br> Cuando la reserva sea confirmada, <br> Entonces el entrenador recibirá una notificación indicando el nombre del cliente y la clase reservada. |
| **Acceptance Criteria #2** | Dado que un cliente ha cancelado una clase previamente reservada con un entrenador, <br> Cuando se confirme la cancelación, <br> Entonces el entrenador recibirá una notificación informándole sobre la cancelación de dicha clase. |

| **User Story ID** | US13 |
|-------------------|------|
| **Epic ID** | EP05 |
| **Title** | Notificaciones según mi actividad personal |
| **Description** | Como cliente del gimnasio, quiero recibir notificaciones personalizadas según mis clases. |
| **Acceptance Criteria #1** | Dado que el cliente tiene una clase programada, <br> Cuando la clase se acerca (por ejemplo, una hora antes), <br> Entonces el cliente recibirá una notificación de recordatorio de su clase, si ha configurado recibir notificaciones para esto. |
| **Acceptance Criteria #2** | Dado que el cliente está inscrito en una clase programada, <br> Cuando la clase sea cancelada por el gimnasio o el entrenador, <br> Entonces el cliente recibirá una notificación inmediata informándole sobre la cancelación y, de ser posible, las opciones de reprogramación. |
| **Acceptance Criteria #3** | Dado que el cliente ha deshabilitado las notificaciones para las clases o el progreso, <br> Cuando se realicen eventos relacionados con clases o logros de progreso físico, <br> Entonces el cliente no recibirá ninguna notificación relacionada con esas actividades. |

| **User Story ID** | US14 |
|-------------------|------|
| **Epic ID** | EP06 |
| **Title** | Información General sobre FitManager |
| **Description** | Como visitante del sitio web de FitManager, quiero obtener información clara sobre las características y beneficios de la plataforma, para decidir si encaja con las necesidades de mi gimnasio. |
| **Acceptance Criteria #1** | Dado que el visitante accede al sitio web de FitManager, <br> Cuando ingresa a la sección "Características", <br> Entonces debe poder ver un resumen detallado de las funciones clave de la plataforma, como la gestión de pagos, reservas, asistencia y personalización de membresías. |
| **Acceptance Criteria #2** | Dado que el visitante está en la página principal de FitManager, <br> Cuando selecciona la opción "Beneficios para tu gimnasio", <br> Entonces debe poder ver una lista clara de los beneficios para gimnasios de diferentes tamaños, incluyendo mejoras en la eficiencia operativa, control financiero y mejor atención al cliente. |

| **User Story ID** | US15 |
|-------------------|------|
| **Epic ID** | EP06 |
| **Title** | Registro para una Demo o Consulta |
| **Description** | Como visitante interesado, quiero registrarme para solicitar una demo personalizada o más información sobre FitManager, para poder explorar cómo puede mejorar la gestión de mi gimnasio. |
| **Acceptance Criteria #1** | Dado que el visitante está en la página de registro de demo, <br> Cuando ingresa su nombre, correo electrónico y gimnasio, <br> Entonces debe poder enviar su solicitud para una demo personalizada de FitManager. |
| **Acceptance Criteria #2** | Dado que el visitante ha completado el formulario de registro para la demo, <br> Cuando hace clic en el botón "Solicitar demo", <br> Entonces el sistema debe enviar un correo electrónico de confirmación con los detalles de la demo programada o información adicional solicitada. |

| **User Story ID** | US16 |
|-------------------|------|
| **Epic ID** | EP06 |
| **Title** | Acceso a Precios y Paquetes de FitManager |
| **Description** | Como visitante, quiero ver los precios y paquetes disponibles para FitManager, para poder decidir si la plataforma se ajusta a mi presupuesto y necesidades. |
| **Acceptance Criteria #1** | Dado que el visitante está en la página de precios, <br> Cuando accede a la sección de precios, <br> Entonces debe ver una lista clara y estructurada de los paquetes disponibles, con sus características y precios correspondientes. |
| **Acceptance Criteria #2** | Dado que el visitante está en la página de precios, <br> Cuando selecciona un paquete específico, <br> Entonces debe poder ver una descripción detallada de las características del paquete, incluyendo funcionalidades y beneficios adicionales. |

| **User Story ID** | US17 |
|-------------------|------|
| **Epic ID** | EP04 |
| **Title** | Gestión de inventario |
| **Description** | Como administrador del gimnasio, quiero gestionar los ítems del inventario, para mantener un control actualizado y ordenado de los recursos y equipos disponibles en el gimnasio. |
| **Acceptance Criteria #1** | Dado que el usuario en la sección de inventario <br> Cuando selecciona la opción "Agregar ítem" y completa el formulario con los datos requeridos <br> Entonces el nuevo ítem debe registrarse y aparecer en la lista de inventario. |
| **Acceptance Criteria #2** | Dado que el usuario visualiza un ítem existente en la lista de inventario <br> Cuando selecciona "Editar" y modifica los campos necesarios <br> Entonces los cambios deben guardarse correctamente y reflejarse en la lista. |
 **Acceptance Criteria #3** | Dado que hay un ítem que ya no es necesario <br> Cuando el usuario selecciona la opción "Eliminar" y confirma la acción <br> Entonces el ítem debe eliminarse del inventario y ya no estar visible en la lista. |

| **User Story ID** | US18 |
|-------------------|------|
| **Epic ID** | EP08 |
| **Title** | Visualización en múltiples idiomas |
| **Description** | Como usuario, quiero poder visualizar la aplicación en inglés o español, para entender fácilmente la información según mi idioma preferido. |
| **Acceptance Criteria #1** | Dado que el usuario tiene configurada la aplicación en el idioma español <br> Cuando accede a la plataforma <br> Entonces todos los textos, botones y mensajes deben mostrarse en español. |
| **Acceptance Criteria #2** | Dado que el usuario tiene configurada la aplicación en el idioma inglés <br> Cuando accede a la plataforma <br> Entonces todos los textos, botones y mensajes deben mostrarse en inglés. |

| **User Story ID** | US19 |
|-------------------|------|
| **Epic ID** | EP08 |
| **Title** | Accesibilidad para lectores de pantalla |
| **Description** | Como usuario que usa un lector de pantalla, quiero poder navegar y entender la plataforma fácilmente con herramientas de asistencia, para tener una experiencia de uso fluida y sin barreras. |
| **Acceptance Criteria #1** | Dado que el usuario utiliza un lector de pantalla <br> Cuando navega por la plataforma <br> Entonces debe recibir información clara sobre los elementos de la interfaz, como botones, menús y secciones. |

| **User Story ID** | US20 |
|-------------------|------|
| **Epic ID** | EP04 |
| **Title** | Gestionar clientes del gimnasio |
| **Description** | Como administrador del gimnasio, quiero poder gestionar la información de los clientes del gimnasio para mantener un registro actualizado. |
| **Acceptance Criteria #1** | Dado que el administrador accede a la sección de gestión de clientes <br> Cuando visualiza la lista de clientes <br> Entonces el sistema muestra una tabla con el nombre, tipo de membresía, y siguiente pago de cada cliente registrado en el gimnasio. |
| **Acceptance Criteria #2** | Dado que el administrador quiere agregar un nuevo cliente <br> Cuando selecciona la opción para agregar cliente <br> Entonces el sistema debe permitir al administrador ingresar los detalles del cliente, como nombre, tipo de membresía, y la fecha del siguiente pago, y guardar estos datos en la base de datos. |
| **Acceptance Criteria #3** | Dado que el administrador necesita eliminar un cliente <br> Cuando selecciona la opción de eliminar <br> Entonces el sistema debe pedir una confirmación antes de eliminar el registro del cliente, asegurándose de que la eliminación se realice de forma definitiva. |

| **User Story ID** | US21 |
|-------------------|------|
| **Epic ID** | EP04 |
| **Title** | Dashboard de actividades |
| **Description** | Como administrador, quiero tener una vista general del rendimiento y la actividad del gimnasio en un solo lugar, incluyendo métricas clave de miembros, asistencia y finanzas, para poder obtener una comprensión rápida del estado actual del negocio y tomar decisiones informadas. |
| **Acceptance Criteria #1** | Dado que el administrador accede al panel principal del dashboard <br> Cuando se carga la vista general del día <br> Entonces se debe mostrar un listado de las clases programadas para hoy, incluyendo el nombre de la clase, horario, entrenador asignado y número de asistentes inscritos. |
| **Acceptance Criteria #2** | Dado que el administrador se encuentra en el dashboard de actividades <br> Cuando visualiza el panel superior o sección de métricas <br> Entonces el sistema debe mostrar indicadores clave como: número total de miembros activos, ingresos mensuales, asistencia promedio semanal y egresos recientes. |

### 3.2.3. Technical Stories

| **User Story ID** | TS01 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Gestión de Miembros y Tipos de Membresía en la API |
| **Description** | Como desarrollador, quiero que la RESTful API me permita gestionar completamente los miembros y consultar los tipos de membresía, para interactuar de forma eficiente con el sistema de gimnasio. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de miembros <br> Cuando el desarrollador realiza una solicitud POST a `/api/v1/Member` con los datos completos y válidos de un nuevo miembro (incluyendo un `membershipTypeId` existente) <br> Entonces el sistema debe crear un nuevo registro de miembro, devolver un estado `201 Created` y los datos del miembro recién creado. |
| **Acceptance Criteria #2** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de miembros <br> Cuando el desarrollador realiza una solicitud GET a `/api/v1/Member` <br> Entonces el sistema debe devolver un estado `200 OK` y una lista de todos los miembros registrados, incluyendo su estado de membresía y tipo de membresía asociado. |
| **Acceptance Criteria #3** | Dado que existe un miembro registrado en el sistema con un ID específico <br> Cuando el desarrollador realiza una solicitud PUT a `/api/v1/Member/{id}` con el ID del miembro y los datos actualizados <br> Entonces el sistema debe actualizar los datos del miembro, devolver un estado `200 OK` y los datos del miembro actualizado. |
| **Acceptance Criteria #4** | Dado que existe un miembro registrado en el sistema con un ID específico <br> Cuando el desarrollador realiza una solicitud DELETE a `/api/v1/Member/{id}` <br> Entonces el sistema debe eliminar el registro del miembro, devolver un estado `204 No Content`, y el miembro ya no debe aparecer en las listas. |
| **Acceptance Criteria #5** | Dado que el desarrollador se encuentra en una aplicación cliente que necesita conocer los tipos de membresía disponibles <br> Cuando el desarrollador realiza una solicitud GET a `/api/v1/MembershipType` <br> Entonces el sistema debe devolver un estado `200 OK` y una lista de todos los tipos de membresía existentes en el sistema. |

| **User Story ID** | TS02 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Gestión de Clases en la API |
| **Description** | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las clases, para que los administradores del gimnasio puedan programar, actualizar y cancelar actividades. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de clases <br> Cuando el desarrollador realiza una solicitud POST a `/api/v1/Classes` con los datos completos y válidos de una nueva clase (incluyendo IDs de recursos relacionados si aplica, como un instructor o tipo de clase) <br> Entonces el sistema debe crear un nuevo registro de clase, devolver un estado `201 Created` y los datos de la clase recién creada. |
| **Acceptance Criteria #2** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de clases <br> Cuando el desarrollador realiza una solicitud GET a `/api/v1/Classes` <br> Entonces el sistema debe devolver un estado `200 OK` y una lista de todas las clases programadas, incluyendo detalles como horario, capacidad y instructor asignado. |
| **Acceptance Criteria #3** | Dado que existe una clase programada en el sistema con un ID específico <br> Cuando el desarrollador realiza una solicitud PUT a `/api/v1/Classes/{id}` con el ID de la clase y los datos actualizados <br> Entonces el sistema debe actualizar los datos de la clase (como horario, capacidad o instructor), devolver un estado `200 OK` y los datos de la clase actualizada. |
| **Acceptance Criteria #4** | Dado que existe una clase programada en el sistema con un ID específico <br> Cuando el desarrollador realiza una solicitud DELETE a `/api/v1/Classes/{id}` <br> Entonces el sistema debe eliminar (o marcar como cancelada) el registro de la clase, devolver un estado `204 No Content`, y la clase ya no debe aparecer en las listas de clases activas/programadas. |

| **User Story ID** | TS03 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Gestión de Reservas y Asistencia de Clases en la API |
| **Description** | Como desarrollador, quiero que la RESTful API me permita registrar la asistencia y consultar las reservas y asistencias de clases, para que los administradores del gimnasio puedan llevar un control del uso de las clases. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de asistencia <br> Cuando el desarrollador realiza una solicitud POST a `/api/v1/Attendances` con los datos necesarios (ej. `MemberId`, `ClassId`, `Date`) <br> Entonces el sistema debe crear un nuevo registro, devolver `201 Created` y los datos de la asistencia registrada. |
| **Acceptance Criteria #2** | Dado que el desarrollador necesita ver quiénes asistieron a una clase específica <br> Cuando realiza una solicitud GET a `/api/v1/Attendances/class/{classId}` <br> Entonces el sistema debe devolver `200 OK` y una lista de asistencias para esa clase, incluyendo datos del miembro y la fecha de asistencia. |
| **Acceptance Criteria #3** | Dado que el desarrollador necesita ver quiénes han reservado una clase específica <br> Cuando realiza una solicitud GET a `/api/v1/Bookings/class/{classId}` <br> Entonces el sistema debe devolver `200 OK` y una lista de reservas registradas para esa clase, incluyendo datos del miembro y la fecha de reserva. |

| **User Story ID** | TS04 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Gestión de Empleados en la API |
| **Description** | Como desarrollador, quiero que la RESTful API me permita gestionar completamente los empleados, para que los administradores del gimnasio puedan mantener actualizada la información del personal. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de empleados <br> Cuando realiza una solicitud POST a `/api/v1/Employee` con los datos completos y válidos <br> Entonces el sistema debe crear un nuevo empleado, devolver `201 Created` y los datos del empleado recién creado. |
| **Acceptance Criteria #2** | Dado que el desarrollador se encuentra en una aplicación cliente <br> Cuando realiza una solicitud GET a `/api/v1/Employee` <br> Entonces el sistema debe devolver `200 OK` y una lista de todos los empleados registrados. |
| **Acceptance Criteria #3** | Dado que existe un empleado con un ID específico <br> Cuando realiza una solicitud PUT a `/api/v1/Employee/{id}` con los datos actualizados <br> Entonces el sistema debe actualizar los datos del empleado, devolver `200 OK` y los datos actualizados. |
| **Acceptance Criteria #4** | Dado que existe un empleado con un ID específico <br> Cuando realiza una solicitud DELETE a `/api/v1/Employee/{id}` <br> Entonces el sistema debe eliminar el registro, devolver `204 No Content` y el empleado ya no debe aparecer en las listas. |

| **User Story ID** | TS05 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Gestión de Inventario en la API |
| **Description** | Como desarrollador, quiero que la RESTful API me permita gestionar completamente los ítems del inventario, para que los administradores del gimnasio puedan controlar los productos disponibles. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de inventario <br> Cuando realiza una solicitud POST a `/api/v1/Item` con los datos completos y válidos de un nuevo ítem <br> Entonces el sistema debe crear un nuevo registro, devolver `201 Created` y los datos del ítem recién creado. |
| **Acceptance Criteria #2** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de inventario <br> Cuando realiza una solicitud GET a `/api/v1/Item` <br> Entonces el sistema debe devolver `200 OK` y una lista de todos los ítems registrados en el inventario. |
| **Acceptance Criteria #3** | Dado que existe un ítem registrado con un ID específico <br> Cuando realiza una solicitud PUT a `/api/v1/Item/{id}` con los datos actualizados <br> Entonces el sistema debe actualizar el ítem, devolver `200 OK` y los datos del ítem actualizado. |
| **Acceptance Criteria #4** | Dado que existe un ítem registrado con un ID específico <br> Cuando realiza una solicitud DELETE a `/api/v1/Item/{id}` <br> Entonces el sistema debe eliminar el ítem, devolver `204 No Content` y el ítem ya no debe aparecer en las listas. |

| **User Story ID** | TS06 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Gestión de Membresías y Salarios en la API |
| **Description** | Como desarrollador, quiero que la RESTful API me permita registrar y listar pagos de membresías y salarios, para que los administradores del gimnasio puedan llevar un control financiero. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de pagos de membresía <br> Cuando realiza una solicitud POST a `/api/v1/MembershipPayment` con los datos completos y válidos (ej. `MemberId`, `Amount`, `PaymentDate`) <br> Entonces el sistema debe crear un nuevo registro, devolver `201 Created` y los datos del pago recién registrado. |
| **Acceptance Criteria #2** | Dado que el desarrollador necesita consultar los pagos de membresía <br> Cuando realiza una solicitud GET a `/api/v1/MembershipPayment` <br> Entonces el sistema debe devolver `200 OK` y una lista de todos los pagos de membresía registrados. |
| **Acceptance Criteria #3** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de pagos de salario <br> Cuando realiza una solicitud POST a `/api/v1/SalaryPayment` con los datos completos y válidos (ej. `EmployeeId`, `Amount`, `PaymentDate`) <br> Entonces el sistema debe crear un nuevo registro, devolver `201 Created` y los datos del pago recién registrado. |
| **Acceptance Criteria #4** | Dado que el desarrollador necesita consultar los pagos de salario <br> Cuando realiza una solicitud GET a `/api/v1/SalaryPayment` <br> Entonces el sistema debe devolver `200 OK` y una lista de todos los pagos de salario registrados. |

| **User Story ID** | TS07 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Gestión de Compras de Insumos en la API |
| **Description** | Como desarrollador, quiero que la RESTful API me permita registrar y consultar las compras de insumos, incluyendo sus detalles, para que los administradores del gimnasio puedan llevar un control preciso de las adquisiciones. |
| **Acceptance Criteria #1** | Dado que el desarrollador se encuentra en una aplicación cliente para la gestión de compras de insumos <br> Cuando realiza una solicitud POST a `/api/v1/SupplyPurchase` con los datos completos y válidos (incluyendo detalles de los ítems comprados) <br> Entonces el sistema debe crear un nuevo registro de compra de insumos y sus detalles, devolver `201 Created` y los datos registrados. |
| **Acceptance Criteria #2** | Dado que el desarrollador necesita consultar compras de insumos <br> Cuando realiza una solicitud GET a `/api/v1/SupplyPurchase` <br> Entonces el sistema debe devolver `200 OK` y una lista de todas las compras registradas, con sus respectivos detalles. |

| **User Story ID** | TS08 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Gestión de Notificaciones en la API |
| **Description** | Como desarrollador, quiero que la RESTful API me permita enviar y listar notificaciones tanto para miembros como para empleados, para facilitar la comunicación y la gestión interna del gimnasio. |
| **Acceptance Criteria #1** | Dado que el desarrollador necesita enviar un mensaje a un miembro <br> Cuando realiza una solicitud POST a `/api/v1/MemberNotifications` con los datos válidos (`MemberId`, `Message`, `Subject`, `DateSent`) <br> Entonces el sistema debe crear un nuevo registro, devolver `201 Created` y los datos de la notificación enviada. |
| **Acceptance Criteria #2** | Dado que el desarrollador necesita ver las notificaciones enviadas a miembros <br> Cuando realiza una solicitud GET a `/api/v1/MemberNotifications` <br> Entonces el sistema debe devolver `200 OK` y una lista con los detalles de todas las notificaciones. |
| **Acceptance Criteria #3** | Dado que el desarrollador necesita enviar un mensaje a un empleado <br> Cuando realiza una solicitud POST a `/api/v1/StaffNotifications` con los datos válidos (`EmployeeId`, `Message`, `Subject`, `DateSent`) <br> Entonces el sistema debe crear un nuevo registro, devolver `201 Created` y los datos de la notificación enviada. |
| **Acceptance Criteria #4** | Dado que el desarrollador necesita ver las notif

| **User Story ID** | TS09 |
|-------------------|------|
| **Epic ID** | EP07 |
| **Title** | Internacionalización del Backend de la API |
| **Description** | Como desarrollador, quiero que el backend de la API sea capaz de traducir sus mensajes y errores de validación a diferentes idiomas, para que la aplicación pueda mostrar información localizada a usuarios de distintas regiones sin cambiar la lógica principal. |
| **Acceptance Criteria #1** | Dado que el backend necesita enviar mensajes al frontend <br> Cuando se realiza una solicitud con un idioma especificado <br> Entonces los mensajes de respuesta deben ser devueltos en ese idioma, o en uno predeterminado si no está soportado. |
| **Acceptance Criteria #2** | Dado que se validan modelos de entrada <br> Cuando se produce un error de validación <br> Entonces el mensaje de error debe mostrarse en el idioma solicitado por el cliente, si está disponible. |
| **Acceptance Criteria #3** | Dado que se requiere gestionar textos traducibles <br> Cuando el sistema necesita recuperar un mensaje <br> Entonces debe utilizar un mecanismo centrali

### 3.2.4. Epicas

| **Epic ID** | EP01 |
|-------------|------|
| **Title** | Gestión de Reservas y Horarios |
| **Description** | Como usuario, quiero una plataforma que permita visualizar horarios, gestionar y realizar reservas de clases de manera eficiente, para garantizar una experiencia fluida, organizada y sin sobrecupo en las sesiones de entrenamiento. |
| **User Story ID** | **Título** |
| US01 | Visualización de horarios |
| US02 | Gestión de calendario |
| US03 | Reservar clases |

| **Epic ID** | EP02 |
|-------------|------|
| **Title** | Seguimiento Personalizado del Entrenamiento |
| **Description** | Como usuario, quiero una funcionalidad para registrar el progreso físico y consultar rutinas personalizadas, para mejorar la constancia, motivación y resultados de los entrenamientos. |
| **User Story ID** | **Título** |
| US04 | Registrar y consultar el progreso físico |
| US05 | Visualizar rutina personalizada |

| **Epic ID** | EP03 |
|-------------|------|
| **Title** | Gestión y Pago de Membresías Online |
| **Description** | Como administrador del gimnasio y como cliente, quiero contar con opciones para gestionar y realizar pagos de membresías desde la plataforma, para facilitar las transacciones, evitar retrasos y mejorar la organización financiera del gimnasio. |
| **User Story ID** | **Título** |
| US06 | Gestionar finanzas |
| US07 | Realizar pagos de membresía desde la app |

| **Epic ID** | EP04 |
|-------------|------|
| **Title** | Gestión de Perfiles y Personal del Gimnasio |
| **Description** | Como administrador del gimnasio, quiero gestionar los perfiles tanto del personal como de los clientes, para mantener organizada y actualizada la información de todos los involucrados en el funcionamiento del gimnasio, facilitar la administración interna y mejorar la atención a los usuarios. |
| **User Story ID** | **Título** |
| US08 | Registrar nuevo cliente en la plataforma |
| US09 | Consultar historial de asistencias general |
| US10 | Gestionar clases |
| US11 | Gestionar personal del gimnasio |
| US17 | Gestión de inventario |
| US20 | Gestionar clientes del gimnasio |
| US21 | Visualización del Dashboard |

| **Epic ID** | EP05 |
|-------------|------|
| **Title** | Sistema de Notificaciones |
| **Description** | Como administrador o cliente del gimnasio, quiero recibir notificaciones administrativas y personalizadas, para mantenerme informado de manera oportuna y mejorar la comunicación con la plataforma. |
| **User Story ID** | **Título** |
| US12 | Notificaciones sobre actualizaciones administrativas |
| US13 | Notificaciones según mi actividad personal |

| **Epic ID** | EP06 |
|-------------|------|
| **Title** | Landing Page |
| **Description** | Como visitante del sitio web de FitManager, quiero acceder fácilmente a información clara y detallada sobre la plataforma, sus beneficios, precios y funcionalidades, para evaluar si se adapta a las necesidades de mi gimnasio o como cliente potencial. |
| **User Story ID** | **Título** |
| US14 | Información General sobre FitManager |
| US15 | Registro para una Demo o Consulta |
| US16 | Acceso a Precios y Paquetes de FitManager |

| **Epic ID** | EP07 |
|-------------|------|
| **Title** | RESTful API |
| **Description** | Como desarrollador, quiero implementar y mantener los endpoints del RESTful API necesarios para las funciones clave de la plataforma, como gestión de clases, reservas, perfiles y pagos, para asegurar la operatividad y escalabilidad del sistema. |
| **Technical Story ID** | **Título** |
| TS01 | Gestión de Miembros y Tipos de Membresía en la API |
| TS02 | Gestión de Clases en la API |
| TS03 | Gestión de Reservas y Asistencia de Clases en la API |
| TS04 | Gestión de Empleados en la API |
| TS05 | Gestión de Inventario en la API |
| TS06 | Gestión de Membresías y Salarios en la API |
| TS07 | Gestión de Compras de Insumos en la API |
| TS08 | Gestión de Notificaciones en la API |
| TS09 | Internacionalización del Backend de la API |

| **Epic ID** | EP08 |
|-------------|------|
| **Title** | Internacionalización y Accesibilidad de Usuarios |
| **Description** | Como usuario de la plataforma, quiero poder acceder a la aplicación en mi idioma preferido y con soporte para tecnologías de asistencia como lectores de pantalla, para asegurar una experiencia inclusiva, accesible y adaptada a mis necesidades. |
| **User Story ID** | **Título** |
| US18 | Visualización en múltiples idiomas |
| US19 | Accesibilidad para lectores de pantalla |

## 3.3. Impact Mapping

A continuación se presenta el mapa de impacto elaborado para FitFlow, usando la herramienta de Miro. Este mapa parte de metas de negocio claras, identifica a los actores clave, describe los impactos esperados y define entregables y user stories que guían el desarrollo de la solución digital.

**Business Goals 1: Aumentar reservas eficientes**
Objetivo SMART: Alcanzar al menos 1,000 reservas de clases mensuales a través de la plataforma en un plazo de 6 meses.
<p align="center">
  <img src="https://github.com/user-attachments/assets/3281883a-dcaa-4b88-976f-f057cc315f1b" alt="IMPACT MAPPING 1">
</p>

**Business Goals 2: Mejorar la retención mediante seguimiento personalizado**
Objetivo SMART: Lograr que el 70% de los usuarios activos consulten y actualicen su progreso al menos una vez por semana en 4 meses.
<p align="center">
  <img src="https://github.com/user-attachments/assets/7016278e-fce4-4e8a-a39a-08789c9202a2" alt="IMPACT MAPPING 2">
</p>

**Business Goals 3: Incrementar la automatización de pagos**
Objetivo SMART: Alcanzar el 90% de pagos de membresía realizados de forma online a través de la plataforma en 5 meses.
<p align="center">
  <img src="https://github.com/user-attachments/assets/95b5aa4e-7ec3-4a5e-97b9-039ee7c0fa90" alt="IMPACT MAPPING 3">
</p>

**Business Goals 4: Mejorar la comunicación entre la plataforma y los usuarios**
Objetivo SMART: Conseguir que el 80% de los usuarios habiliten las notificaciones personalizadas y administrativas en los próximos 3 meses.
<p align="center">
  <img src="https://github.com/user-attachments/assets/82008781-4b53-4421-af02-1e9c088da844" alt="IMPACT MAPPING 4">
</p>

**Business Goals 5: Generar interés y solicitudes de información sobre FitManager**
Objetivo SMART: Obtener 50 formularios de contacto para demo o consulta desde la landing en un lapso de 2 meses.
<p align="center">
  <img src="https://github.com/user-attachments/assets/299faefb-f0f8-4e0f-aec5-40f6c046a00c" alt="IMPACT MAPPING 4">
</p>

## 3.4. Product Backlog

| #  | User Story ID | Descripción | Story Points |
|----|----------------|-------------|---------------|
| 1  | US03 | Como cliente, quiero poder reservar clases desde mi celular o web para asegurar mi cupo sin tener que llamar o hacer fila. | 5 |
| 2  | US02 | Como administrador, quiero poder gestionar y modificar la información mostrada en el calendario de clases, incluyendo la adición de nuevas clases y la visualización de la programación, para asegurar que los clientes siempre tengan una visión clara y actualizada de la disponibilidad de las clases. | 3 |
| 3  | US20 | Como administrador del gimnasio, quiero poder gestionar la información de los clientes del gimnasio para mantener un registro actualizado, agregar nuevos clientes y editar la información existente, asegurando que toda la base de datos esté organizada y sea fácilmente accesible. | 5 |
| 4  | US01 | Como usuario, quiero acceder a un calendario con los horarios de todas las clases para planificar fácilmente la programación y disponibilidad. | 3 |
| 5  | TS02 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente las clases, para que los administradores del gimnasio puedan programar, actualizar y cancelar actividades. | 2 |
| 6  | TS01 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente los miembros y consultar los tipos de membresía, para interactuar de forma eficiente con el sistema de gimnasio. | 2 |
| 7  | TS04 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente los empleados, para que los administradores del gimnasio puedan mantener actualizada la información del personal. | 2 |
| 8  | US06 | Como administrador del gimnasio, quiero ver y gestionar el estado de pagos de cada cliente para llevar un control eficiente de membresías activas e inactivas. | 5 |
| 9  | TS03 | Como desarrollador, quiero que la RESTful API me permita registrar la asistencia y consultar las reservas y asistencias de clases, para que los administradores del gimnasio puedan llevar un control del uso de las clases. | 2 |
| 10 | US17 | Como administrador del gimnasio, quiero gestionar los ítems del inventario, para mantener un control actualizado y ordenado de los recursos y equipos disponibles en el gimnasio. | 3 |
| 11 | TS05 | Como desarrollador, quiero que la RESTful API me permita gestionar completamente los ítems del inventario, para que los administradores del gimnasio puedan controlar los productos disponibles. | 2 |
| 12 | US07 | Como cliente del gimnasio, quiero pagar mi membresía desde la app usando mi tarjeta o billetera digital para mantener mi suscripción activa fácilmente. | 5 |
| 13 | TS06 | Como desarrollador, quiero que la RESTful API me permita registrar y listar pagos de membresías y salarios, para que los administradores del gimnasio puedan llevar un control financiero. | 2 |
| 14 | TS07 | Como desarrollador, quiero que la RESTful API me permita registrar y consultar las compras de insumos, incluyendo sus detalles, para que los administradores del gimnasio puedan llevar un control preciso de las adquisiciones. | 2 |
| 15 | US04 | Como cliente, quiero registrar y visualizar mi progreso físico dentro de la app para evaluar mi evolución y mantenerme motivado. | 3 |
| 16 | US10 | Como administrador del gimnasio, quiero poder gestionar las clases ofrecidas por el gimnasio para mantener actualizada la programación. | 3 |
| 17 | US08 | Como cliente, quiero poder crear mi perfil para llevar un control de mi información personal y actividad dentro del gimnasio. | 3 |
| 18 | US09 | Como entrenador, quiero poder ver un historial general de asistencias de todos los clientes para analizar tendencias de asistencia, evaluar el compromiso de los miembros y ajustar las clases según la demanda. | 3 |
| 19 | US12 | Como administrador o entrenador, quiero recibir notificaciones administrativas relevantes para mantenerme informado sobre situaciones importantes relacionadas con la operación del gimnasio. | 3 |
| 20 | US13 | Como cliente del gimnasio, quiero recibir notificaciones personalizadas según mis clases. | 3 |
| 21 | TS08 | Como desarrollador, quiero que la RESTful API me permita enviar y listar notificaciones tanto para miembros como para empleados, para facilitar la comunicación y la gestión interna del gimnasio. | 2 |
| 22 | TS09 | Como desarrollador, quiero que el backend de la API sea capaz de traducir sus mensajes y errores de validación a diferentes idiomas, para que la aplicación pueda mostrar información localizada a usuarios de distintas regiones sin cambiar la lógica principal. | 1 |
| 23 | US14 | Como visitante del sitio web de FitManager, quiero obtener información clara sobre las características y beneficios de la plataforma, para decidir si encaja con las necesidades de mi gimnasio. | 3 |
| 24 | US15 | Como visitante interesado, quiero registrarme para solicitar una demo personalizada o más información sobre FitManager, para poder explorar cómo puede mejorar la gestión de mi gimnasio. | 2 |
| 25 | US21 | Como administrador, quiero tener una vista general del rendimiento y la actividad del gimnasio en un solo lugar, incluyendo métricas clave de miembros, asistencia y finanzas, para poder obtener una comprensión rápida del estado actual del negocio y tomar decisiones informadas. | 2 |
| 26 | US16 | Como visitante, quiero ver los precios y paquetes disponibles para FitManager, para poder decidir si la plataforma se ajusta a mi presupuesto y necesidades. | 2 |
| 27 | US05 | Como cliente, quiero ver mi rutina personalizada de entrenamiento en la plataforma para seguirla paso a paso durante mis sesiones. | 5 |
| 28 | US11 | Como administrador del gimnasio, quiero poder gestionar al personal del gimnasio para mantener un control organizado sobre los entrenadores y otros empleados. | 5 |
| 29 | US18 | Como usuario, quiero poder visualizar la aplicación en inglés o español, para entender fácilmente la información según mi idioma preferido. | 2 |
| 30 | US19 | Como usuario que usa un lector de pantalla, quiero poder navegar y entender la plataforma fácilmente con herramientas de asistencia, para tener una experiencia de uso fluida y sin barreras. | 2 |

# CAPÍTULO 4: PRODUCT UX/UI DESIGN

## 4.1. Style Guidelines

Las Style Guidelines de FitManager funcionan como una herramienta estratégica para mantener la coherencia visual y funcional en cada punto de contacto de la plataforma. Esta guía proporciona una estructura clara para diseñadores y desarrolladores, asegurando que todos los elementos visuales, desde botones y formularios hasta interfaces completas, respondan a criterios de usabilidad, escalabilidad y consistencia.

### 4.1.1 General Style Guidelines

El branding de FitManager es el núcleo de su identidad visual, pensado para comunicar los valores esenciales de la plataforma, eficiencia, profesionalismo y cercanía. A través de una estética limpia moderna y funcional, como marca buscamos transmitir confianza y accesibilidad, posicionándonos como una solución tecnológica amigable para gimnasios y centros deportivos. El logotipo, la paleta de colores y la tipografía de FitManager están diseñados para evocar orden, claridad y dinamismo, reflejando el enfoque práctico de la plataforma en la gestión y crecimiento de negocios fitness. Cada elemento visual está cuidadosamente alineado con una experiencia intuitiva y profesional, asegurando que tanto administradores como clientes se sientan respaldados por una herramienta confiable, eficiente y fácil de usar.

#### 4.1.1.1. Tipografía

La tipografía no solo comunica palabras, sino también personalidad, claridad y experiencia de uso. En el desarrollo del sistema de gestión del gimnasio, hemos seleccionado cuidadosamente dos fuentes complementarias: Bebas Neue y Roboto. Esta elección responde tanto a criterios estéticos como funcionales:

* Bebas Neue transmite fuerza, dinamismo y estructura. Es perfecta para títulos y elementos visuales que deben destacar.
* Roboto aporta neutralidad, legibilidad y modernidad. Está optimizada para pantallas, lo que mejora la experiencia del usuario en distintos dispositivos.

Esta combinación tipográfica garantiza una interfaz atractiva, consistente y fácil de usar, alineada con la identidad de un gimnasio moderno y tecnológico.

**Bebas Neue**
Uso principal: Títulos y encabezados.
Razones de selección:
* Estilo condensado ideal para espacios reducidos.
* Genera jerarquía visual clara.
* Transmite energía y enfoque profesional.
<p align="center">
  <img src="https://github.com/user-attachments/assets/092e5fc1-9fc8-4e23-9656-f65e49a86c2c" alt="Bebas Neue">
</p>

**Roboto**
Uso principal: Cuerpo de texto, formularios, menús, etiquetas y descripciones.
Razones de selección:
* Excelente legibilidad en pantallas de cualquier tamaño.
* Compatible con múltiples sistemas y navegadores.
* Su diseño moderno y neutral complementa perfectamente a Bebas Neue.
<p align="center">
  <img src="https://github.com/user-attachments/assets/3d880b44-68e0-4a44-ad11-928359e23fb9" alt="Roboto">
</p>

**** 4.1.1.2. Colores

La paleta de colores de FitManager cumple un papel fundamental en la construcción de una interfaz clara, profesional y confiable. Cada color ha sido seleccionado estratégicamente para transmitir orden, eficiencia y modernidad, facilitando la navegación y mejorando la legibilidad en diferentes contextos. 
Esta selección no solo apoya la identidad visual de la marca, sino que también refuerza la experiencia del usuario al establecer jerarquías visuales claras, resaltar elementos clave y guiar la interacción de forma intuitiva.
La identidad visual de FitManager está diseñada para transmitir modernidad, profesionalismo y confianza. La paleta de colores elegida combina tonos azules con contrastes neutros, buscando mantener una experiencia visual clara, intuitiva y coherente en todos los puntos de contacto con el usuario.

<p align="center">
  <img src="https://github.com/user-attachments/assets/109aad69-bf4c-4943-af87-254e71e0821c" alt="Colores">
</p>

* Azul eléctrico(#007BFF): Se utiliza en botones de acción, enlaces destacados, íconos activos, elementos interactivos y llamados a la acción (CTAs). Representa energía, dinamismo y confianza.
* Cian claro(#A7D1D2): Color principal en la aplicación. Se utiliza como fondo de tarjetas, paneles informativos, hover states y elementos secundarios. Aporta frescura, claridad y balance visual, suavizando el uso del azul eléctrico.
* Azul oscuro(#0A113A): Color usado en el logo y en la Landing Page. Se usa para encabezados, títulos, botones secundarios, pie de página o elementos que requieren un énfasis serio y profesional. Representa estabilidad, seriedad y estructura visual dentro de la interfaz.
* Blanco(#FFFFFF): Color principal para texto en la Landing Page y elementos sobre fondos oscuros. También se utiliza como color de fondo principal en versiones claras del sistema. Asegura legibilidad y limpieza visual.
* Negro(#000000): Utilizado para contrastar con elementos claros. Ayuda a resaltar componentes importantes, generar profundidad y enfocar la atención del usuario.
Además, se usa un negro con 65% de opacidad para bordes, líneas divisorias, íconos secundarios o texto complementario. Ayuda a estructurar la información sin competir visualmente con los colores principales. Proporciona jerarquía visual sin saturación.
* Rosado pálido(#F2EDED): Color de fondo en la aplicación web de FitManager para crear una base visual suave y cálida que no distrae del contenido principal ni de los elementos interactivos. Su ligereza y sutil tinte rosado aportan una sensación de equilibrio y confort visual, permitiendo que se destaquen otros botones y elementos de acción.

#### 4.1.1.3. Espaciado

El espaciado en FitManager es un componente esencial del sistema de diseño, ya que garantiza una presentación visual ordenada, legible y cómoda para el usuario. A través de una estructura clara de márgenes, rellenos y separación entre elementos, buscamos optimizar la jerarquía visual y mejorar la experiencia de navegación. El uso consistente del espaciado contribuye a reducir la carga cognitiva, dirigir la atención hacia acciones clave y mantener una estética limpia y profesional en toda la plataforma.

El espaciado en FitManager sigue un sistema basado en 5px para garantizar consistencia visual, alineación armoniosa y escalabilidad en todos los componentes.

1. Fundamentos del Sistema
* Unidad base: 5px (todas las medidas son múltiplos: 5px, 10px, 15px, 20px, 25px, etc.).
* Objetivo: Crear ritmo visual y jerarquía clara.

2. Aplicación en Componentes
a) Márgenes Externos (Separación entre bloques)
* 30px y 60px:
 * Para separar paneles.
<p align="center">
  <img src="https://github.com/user-attachments/assets/9e8431ae-c6a2-452c-899c-ccf2ed32aa02" alt="Separación 30px">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/0f93a453-4823-4ef8-9168-35530b9aae2a" alt="Separación 60px">
</p>

b) Padding (Espacio interno en componentes)
* 15px:
 * Dentro de tarjetas de métricas.
 * En celdas de tablas.
<p align="center">
  <img src="https://github.com/user-attachments/assets/c693d94b-6a4a-41a1-b49c-01072f717a4e" alt="Separación 15px">
</p>
* 25px
 * Entre elementos del menú lateral
<p align="center">
  <img src="https://github.com/user-attachments/assets/11a0771f-2cfe-4b83-83e2-d2fd5c1070df" alt="Separación 15px">
</p>
* 10px:
 * En botones.
<p align="center">
  <img src="https://github.com/user-attachments/assets/76b011cb-6e51-4e95-aee7-597654e4f011" alt="Separación 10px">
</p>

c) Espaciado Vertical (Entre elementos apilados)
* 5px:
 * Entre líneas en listas compactas.
<p align="center">
  <img src="https://github.com/user-attachments/assets/d2c56f59-a2e4-4879-bab0-99339f6fa8d5" alt="Separación 5px">
</p>

#### 4.1.1.4. Tono de Comunicación y Lenguaje Aplicado

El tono de comunicación de FitManager está cuidadosamente definido para reflejar los valores de profesionalismo, confianza y cercanía que caracterizan a la plataforma. Utilizamos un lenguaje claro, directo y accesible, evitando tecnicismos innecesarios para facilitar la comprensión por parte de todos los usuarios, independientemente de su nivel de experiencia tecnológica. Nuestra comunicación busca ser empática y resolutiva, transmitiendo seguridad en la gestión y apoyo constante. En cada mensaje, desde las interfaces hasta la documentación y notificaciones, priorizamos la simplicidad, la utilidad y un trato humano, fomentando una relación positiva y duradera entre la plataforma y sus usuarios.

### 4.1.2 Web Style Guidelines

Las Web Style Guidelines de FitManager definen los principios visuales, estructurales y funcionales para la implementación de la interfaz en entornos web. Este apartado está orientado a garantizar una experiencia de usuario coherente, accesible y optimizada en navegadores modernos, respetando la identidad visual de la marca. Incluye lineamientos específicos sobre diseño responsivo, comportamiento de componentes, adaptabilidad de estilos, y consideraciones técnicas para asegurar rendimiento, compatibilidad y escalabilidad.

<p align="center">
  <img src="https://github.com/user-attachments/assets/c52e45fa-2eee-4810-a245-dc7f8d478a91" alt="Página de inicio de FitManager">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/baddfc0d-7acb-49f8-b9d2-f14624dec3ba" alt="Parte Superior página de inicio de FitManager">
</p>

En la parte superior de la aplicación web de FitManager, se destacan el logotipo, la barra de búsqueda y un acceso rápido al perfil del usuario.

**Logotipo:** El logotipo, ubicado estratégicamente en la esquina superior izquierda, cumple una doble función crucial: establece y refuerza la identidad de marca de FitManager, permitiendo a los usuarios reconocer la plataforma a lo largo de su uso, y sirve como un punto de navegación intuitivo, ya que al hacer clic en él, los usuarios esperan ser dirigidos a la página de inicio o al panel de resumen general, facilitando así la orientación dentro de la aplicación.
Panel Izquierdo

**Barra de Búsqueda:** Situada prominentemente en la parte superior central o derecha, la barra de búsqueda ofrece una herramienta esencial para la eficiencia y la accesibilidad, permitiendo a los usuarios localizar rápidamente información específica como miembros, personal o registros, sin la necesidad de navegar extensos menús. Esta funcionalidad atiende a diversos estilos de uso y mejora significativamente la usabilidad al proporcionar un atajo directo al contenido deseado.

**Acceso Rápido al Perfil del Usuario:** El acceso al perfil, típicamente ubicado en la esquina superior derecha, prioriza la personalización y el control del usuario sobre su cuenta. Cumpliendo con una convención de diseño web establecida, permite a los usuarios gestionar su información personal y la opción de cerrar sesión de manera intuitiva y rápida, contribuyendo a una experiencia de usuario consistente y segura.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d98d8037-3a47-47df-a6d1-c9b7cd0e19fc" alt="Paneles centrales página de inicio de FitManager">
</p>

En los paneles centrales de la interfaz de Fitmanager, se presenta de manera organizada y detallada la información, las métricas clave, las listas y, en general, los datos específicos y relevantes para la sección en la que el usuario se encuentra navegando. Ya sea el resumen general con sus indicadores de rendimiento, el calendario con la programación de actividades, la lista de personal o miembros con sus detalles, o cualquier otra sección, estos paneles actúan como el punto focal para la visualización y la interacción con la información esencial para la gestión del gimnasio. La presentación clara y estructurada de estos datos facilita la comprensión, el análisis y la toma de decisiones por parte del usuario.

## 4.2. Information Architecture

En FitFlow, los sistemas de organización son la base para estructurar la información de manera clara, eficiente y orientada a las necesidades reales de gimnasios pequeños y medianos. Nuestra plataforma está diseñada para que tanto administradores como entrenadores y usuarios encuentren rápidamente lo que necesitan, reduciendo fricciones y optimizando el tiempo de gestión. 
La organización de contenidos y funcionalidades responde a principios de simplicidad, accesibilidad y escalabilidad, en línea con nuestra misión de modernizar el sector fitness.

### 4.2.1. Organization Systems

La organización jerárquica es la forma predominante en la navegación general de la aplicación, permitiendo a los usuarios moverse entre las diferentes áreas de gestión de manera estructurada. Dentro de tareas específicas, como crear una notificación o editar un perfil, se implementa una organización secuencial para guiar al usuario a través de los pasos necesarios para completar la acción.

Homepage Organization Systems Diagram
<p align="center">
  <img src="https://github.com/user-attachments/assets/cf3cef76-f6d6-4800-a73b-79cf19128865" alt="Homepage Organization Systems Diagram">
</p>

Screens Organization Systems Diagram
<p align="center">
  <img src="https://github.com/user-attachments/assets/cb5eb7b3-0cde-47a4-868c-9521ef7dc3a4" alt="Screens Organization Systems Diagram Parte 1">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/be8387de-1048-4a0f-b157-73bac54ff375" alt="Screens Organization Systems Diagram Parte 2">
</p>

En los listados de FitManager, como los de "Miembros" y "Personal", se implementa un sistema de organización flexible que permite filtrar la información según diversos criterios. Esto significa que la categorización del contenido se adapta dinámicamente a las necesidades específicas del usuario. En lugar de una única forma predefinida de visualizar la lista, los usuarios pueden aplicar filtros basados en diferentes atributos

<p align="center">
  <img src="https://github.com/user-attachments/assets/053bc363-ec89-4a3e-b330-f141fd800203" alt="Filtro búsqueda">
</p>

### 4.2.2. Labeling Systems

La interfaz principal de FitManager ha sido diseñada para ofrecer una experiencia simple, intuitiva y eficiente para administradores de gimnasios, entrenadores personales y personal operativo. Toda la información relevante se presenta de forma visual y accesible en una sola pantalla, reduciendo el número de clics necesarios para obtener datos clave y optimizando la toma de decisiones en tiempo real. Las etiquetas utilizadas en la plataforma han sido seleccionadas con criterios de brevedad, claridad semántica y familiaridad para el usuario.

Una vez dentro del sistema, el usuario interactúa principalmente con un panel lateral izquierdo que contiene accesos directos a las funcionalidades principales, todas organizadas con etiquetas concisas:

* Resumen General: es la vista principal del sistema, donde se concentran las métricas más importantes del gimnasio. La etiqueta “Resumen” comunica al instante que se trata de una visión global.
* Calendario: permite al usuario consultar clases, reservas y eventos organizados cronológicamente. El término “Calendario” resulta ampliamente reconocido y comprensible.
* Personal: ofrece acceso a los datos del staff como entrenadores, recepcionistas y otros colaboradores. Se ha optado por esta palabra por ser directa y representar de forma clara a los recursos humanos del gimnasio.
* Miembros: sección dedicada al registro, modificación y seguimiento de los usuarios del gimnasio. “Miembros” es más formal y preciso que sinónimos como “usuarios” o “clientes”, y está alineado con el lenguaje del fitness.
* Clases: contiene la gestión de horarios, cupos e instructores asignados. Esta palabra comunica eficazmente la idea de sesiones grupales sin necesidad de mayor explicación.
* Reservas: muestra los registros semanales de usuarios que apartaron un lugar en clases. El uso de esta etiqueta facilita la comprensión inmediata del propósito.
* Ingresos y Pagos: sección financiera que engloba ingresos mensuales, pagos recibidos y pendientes. Se usa una doble etiqueta porque ambos conceptos están estrechamente relacionados.
* Asistencia: brinda información sobre la frecuencia de entrada de los miembros al gimnasio. La palabra elegida es directa y sin tecnicismos.
* Notificaciones: aquí se concentran los avisos automáticos del sistema, como recordatorios o alertas.
* Ajustes: sección de configuración general de la cuenta, donde se pueden modificar parámetros del sistema o el perfil del usuario.

<p align="center">
  <img src="https://github.com/user-attachments/assets/160955bc-6e47-4019-8c76-2ffd77fdcb93" alt="Panel lateral izquierdo">
</p>

Dentro de cada una de estas secciones se emplean etiquetas breves para resumir métricas y paneles clave. Por ejemplo, en el dashboard de Resumen General:
* Miembros totales: indica la cantidad total de usuarios registrados.
* Miembros activos: muestra los usuarios actualmente en actividad.
* Reservas/Semana y Asistencia/Semana: resumen el movimiento semanal.
* Asistencia hoy: representa un gráfico por horas del día.
* Ingresos/Mes, Nuevos/Mes y Pagos Pendientes: presentan métricas financieras y de crecimiento mensual de forma simplificada.

En la parte derecha, la sección Clases de Hoy usa una tabla horaria que facilita la consulta rápida y visual del cronograma diario. Cada clase se vincula al horario correspondiente sin necesidad de etiquetas adicionales, haciendo la lectura más ágil.
Todas las etiquetas han sido seleccionadas estratégicamente para eliminar redundancias, evitar el ruido visual y garantizar una curva de aprendizaje rápida para el usuario. El resultado es una interfaz donde cada palabra tiene un propósito funcional claro y donde las asociaciones visuales (íconos, colores, gráficos) refuerzan el entendimiento del contenido.

### 4.2.3. SEO Tags and Meta Tags

El bloque de código HTML presentado incluye metadatos esenciales para la correcta interpretación y visualización de la página web. Define la codificación de caracteres a UTF-8 para una compatibilidad amplia, asegura la compatibilidad con las últimas funcionalidades de Internet Explorer, configura la ventana gráfica para adaptarse a diferentes dispositivos con un escalado inicial de 1, y establece "FitFlow" como el autor del sitio. Además, enlaza un icono SVG como favicon para la identificación visual de la pestaña del navegador y define el título principal de la página como "FitManager - Fitness & Gym administration", el cual es crucial para el SEO y la identificación de la pestaña. Finalmente, se enlazan varias hojas de estilo CSS, incluyendo Bootstrap para el diseño responsive, AOS para animaciones de desplazamiento, Lightgallery y Swiper para galerías y carruseles, y un archivo de estilo personalizado para la presentación visual específica del sitio.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d85729b2-b582-4343-98ab-2d721328490b" alt="Meta tags parte 1">
</p>

En la Landing Page, los meta tags están estratégicamente definidos para optimizar la visibilidad en los motores de búsqueda y atraer al público objetivo. El título, "FitManager: Software Integral de Gestión para Gimnasios y Estudios Fitness", es descriptivo e incluye palabras clave relevantes. La descripción proporciona un resumen conciso de los beneficios y funcionalidades principales del software, invitando a los dueños de gimnasios y estudios a digitalizar su gestión. Las palabras clave listadas abarcan los términos de búsqueda más probables que utilizarían los interesados en este tipo de solución. Finalmente, se identifica a "FitFlow" como el autor del software, reforzando la marca.

<p align="center">
  <img src="https://github.com/user-attachments/assets/0bb742ab-ea1c-40d2-a758-d52dd5187293" alt="Meta tags parte 2">
</p>

A continuación, se presenta un ejemplo de las etiquetas SEO y meta tags que se implementarían en una de las secciones de la aplicación web. El título "Resumen General | FitManager" identifica la sección. La descripción explica que esta página ofrece una vista en tiempo real del estado del gimnasio con métricas clave (miembros activos, reservas, asistencia). Las palabras clave facilitan la búsqueda de esta función (dashboard gimnasio, resumen gimnasio). "FitFlow" es el autor.

<p align="center">
  <img src="https://github.com/user-attachments/assets/a7e92220-dd6e-49a1-9ff4-538b972c2663" alt="Meta tags parte 3">
</p>

### 4.2.4 Searching Systems

En FitManager, los sistemas de búsqueda han sido diseñados con el objetivo de ofrecer a los usuarios , principalmente administradores y personal de gimnasios, una herramienta ágil, clara y eficiente para localizar datos relevantes dentro de la plataforma. Considerando la cantidad de información que puede generarse en un entorno administrativo (reservas, ingresos, clases, personal, clientes, etc.), el sistema de búsqueda juega un papel fundamental para evitar la sobrecarga cognitiva y mejorar la productividad diaria.

**Barra de búsqueda universal**

Ubicada en la parte superior de la interfaz, la barra de búsqueda actúa como el núcleo del sistema de búsqueda de FitManager. A través de ella, los usuarios pueden ingresar palabras clave relacionadas con:
* Nombres de clientes o usuarios
* Clases específicas
* Entrenadores
La barra cuenta con autocompletado inteligente, lo que permite que, a medida que el usuario escribe, se sugieran coincidencias basadas en registros existentes y búsquedas frecuentes anteriores.

**Filtros específicos por módulo**
Luego de ingresar una búsqueda general, el sistema despliega los resultados organizados por categorías y habilita filtros dinámicos según el tipo de dato. Algunos ejemplos incluyen:
* Clientes
 * Filtrar por: tipo de membresía, estado de cuenta, frecuencia de asistencia.
* Clases
 * Filtrar por: disciplina (yoga, spinning, etc.), nivel de dificultad, disponibilidad de cupo, instructor asignado.
* Reservas
 * Filtrar por: estado (confirmada, cancelada, vencida), fecha, usuario asociado.
* Pagos
 * Filtrar por: estado (pagado, pendiente), método (efectivo, tarjeta), monto, fecha.
* Personal
 * Filtrar por: rol (entrenador, recepcionista, administrador), horarios asignados, antigüedad.

Cada uno de estos filtros se presenta en forma de pestañas desplegables o checklists, lo que facilita al usuario afinar su búsqueda sin abandonar la página actual.

<p align="center">
  <img src="https://github.com/user-attachments/assets/ac8972b3-df84-43f8-95cf-96996fe3d912" alt="Personal Búsqueda">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/54a9ab70-faf9-493e-819a-7c8fba905110" alt="Búsqueda">
</p>

### 4.2.5. Navigation Systems

En FitManager, los sistemas de navegación fueron diseñados para ofrecer una experiencia clara, eficiente y centrada en el usuario, tanto en la Landing Page como dentro de la aplicación web. La navegación permite a los usuarios cumplir fácilmente sus objetivos: revisar datos de asistencia, reservas, ingresos, pagos pendientes, así como administrar clases, personal y miembros.
El menú de navegación superior de la Landing Page ha sido diseñado para ofrecer a los visitantes un acceso directo y eficiente a las diferentes áreas de interés del sitio. A través de enlaces claramente etiquetados, los usuarios pueden explorar las diversas secciones: "Home" para la página principal, proporcionando una visión general de FitManager; "Sobre Nosotros", donde se detalla la información acerca de FitFlow, la empresa desarrolladora; "Muestras", que ofrece ejemplos visuales de la interfaz y funcionalidades de la aplicación; "Planes", donde se presentan las diferentes opciones de precios y suscripción; y "Contacto", que facilita la comunicación con FitFlow a través de la información de contacto proporcionada.

<p align="center">
  <img src="https://github.com/user-attachments/assets/798be2fc-fa53-40ef-ad9d-da5c8e45cdea" alt="Menú navegación superior">
</p>

Uno de los componentes clave de navegación es el menú lateral izquierdo, el cual está presente de forma persistente en todas las pantallas. Este menú contiene accesos directos a las secciones principales:
* Resumen General: Vista central del estado actual del gimnasio, con indicadores clave (miembros, ingresos, asistencia, etc.).
* Calendario: Gestión visual de clases, horarios y reservas en formato semanal/mensual.
* Personal: Administración del personal del gimnasio, su disponibilidad y asignaciones.
* Miembros: Gestión de la base de datos de usuarios registrados, con su información y estatus.
* Clases: Control y configuración de clases disponibles, horarios y entrenadores.
* Reservas: Registro de reservas por parte de los miembros.
* Ingresos y Pagos: Visualización de ingresos mensuales y gestión de pagos pendientes.
* Asistencia: Control de la asistencia diaria por hora y por clase.
* Notificaciones: Sistema de alertas y mensajes importantes para administradores y usuarios.
* Ajustes: Configuración general de la plataforma.

<p align="center">
  <img src="https://github.com/user-attachments/assets/eb4fbb53-5b62-45f3-b476-b552153771e2" alt="Panel lateral izquierdo">
</p>

Cada ícono en el menú está acompañado por un nombre corto y representativo, lo que facilita la navegación incluso a usuarios con poca experiencia. Este menú mantiene siempre visible la estructura principal del sitio, reduciendo la posibilidad de desorientación.
La navegación e interacción con la información contenida en las diversas listas de la aplicación se ha diseñado para ser intuitiva y ágil. Los usuarios tienen la capacidad de refinar su búsqueda mediante la aplicación de filtros específicos o la introducción de términos directamente en la barra de búsqueda. Al seleccionar un resultado coincidente dentro de la lista, el sistema despliega de forma inmediata una vista detallada con información relevante sobre el elemento seleccionado, ya sea un miembro del gimnasio, un empleado o cualquier otro tipo de registro gestionado por la plataforma. Adicionalmente, este panel de visualización detallada ofrece la funcionalidad de ejecutar acciones directamente sobre el elemento seleccionado, eliminando la necesidad de navegar a otras secciones de la aplicación.

<p align="center">
  <img src="https://github.com/user-attachments/assets/552b1d72-d7cc-4a3b-802b-f53e2c9b3208" alt="Miembros navegación">
</p>

La organización jerárquica de la información dentro de la aplicación se ve reforzada por la implementación estratégica de elementos divisorios, como líneas y espacios en blanco, que ayudan a segmentar visualmente el contenido y a establecer relaciones entre los diferentes grupos de datos. Adicionalmente, la cuidadosa modulación del tamaño de los paneles contribuye a esta jerarquía visual, destacando la información más relevante mediante paneles de mayor tamaño o una ubicación preferente, mientras que los detalles secundarios se presentan en paneles más pequeños o en un segundo plano visual. 

## 4.3. Landing Page UI Design

Los wireframes y mockups de la Landing Page de FitManager se conciben siguiendo los principios fundamentales de la Arquitectura de la Información y el Diseño de Interfaz de Usuario . La AI se aplica para estructurar y organizar el contenido de manera lógica e intuitiva, facilitando la comprensión de la propuesta de valor y la navegación a través de las diferentes secciones informativas. Paralelamente, los principios de UI se integran para crear una interfaz visualmente atractiva, funcional y fácil de usar, considerando la jerarquía visual, el contraste, la legibilidad y la llamada a la acción, con el objetivo de guiar al usuario de manera efectiva hacia la conversión.

### 4.3.1. Landing Page Wireframes

<p align="center">
  <img src="https://github.com/user-attachments/assets/70a92f7c-4fdb-4ee5-b7df-2d346338486d" alt="Home wireframe">
</p>

La sección de inicio presentará un eslogan impactante que articule la propuesta de valor central de la marca, acompañado de un botón de llamada a la acción estratégicamente diseñado para impulsar la interacción del usuario. Este conjunto se complementará con una imagen relevante que refuerce visualmente el mensaje clave.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8f7d97b2-bb85-40f9-92da-8e908e5669d5" alt="Sobre Nosotros wireframe">
</p>

La sección "Sobre Nosotros" se estructurará estratégicamente para abordar las preguntas más frecuentes de los usuarios al inicio, buscando clarificar de inmediato el propósito y los beneficios fundamentales de FitManager. A continuación, se detallarán las funcionalidades principales de la plataforma, resaltando aquellas características más atractivas y valiosas para la gestión de gimnasios. Para generar confianza y credibilidad, se presentará un listado de clientes destacados que ya se benefician de FitManager. Finalmente, se ofrecerá a los visitantes la oportunidad de suscribirse a un boletín mensual.

<p align="center">
  <img src="https://github.com/user-attachments/assets/60c94562-ccec-42b9-b082-9fa716d774bc" alt="Planes wireframe">
</p>

La sección de "Planes" presentará tres opciones de suscripción mensual diferenciadas por sus funcionalidades y precios, permitiendo a los usuarios seleccionar la alternativa que mejor se ajuste a sus necesidades y presupuesto. Cada plan se describirá detalladamente, resaltando las características específicas que ofrece. Para facilitar la elección, se incorporarán botones de llamada a la acción visualmente atractivos y claramente etiquetados, invitando a los usuarios a seleccionar el plan de su preferencia.

<p align="center">
  <img src="https://github.com/user-attachments/assets/b87713ac-7845-4fc1-a3a9-efcd9e123a12" alt="Contacto wireframe">
</p>

La sección de "Contacto" proporcionará a los usuarios múltiples vías para comunicarse con FitManager. Inicialmente, se ofrecerá un texto introductorio invitando al contacto para consultas o para descubrir cómo la plataforma puede beneficiar su negocio. A continuación, se detallará la información de contacto directa, incluyendo la dirección física, la dirección de correo electrónico, el número de teléfono y el horario de atención. Para facilitar una comunicación más inmediata, se integrará un formulario de contacto donde los usuarios podrán ingresar su nombre, correo electrónico, número de teléfono y escribir un mensaje directamente, con un botón claro para enviar su consulta.

<p align="center">
  <img src="https://github.com/user-attachments/assets/14322d02-4141-41a6-b1c9-91568cc6beac" alt="Footer wireframe">
</p>

El footer de FitManager mostrará en columnas la ubicación y contacto (dirección, email, horario), enlaces rápidos a secciones clave (Sobre Nosotros, Planes, Contacto), y acceso a redes sociales. También incluirá el logo, un breve texto de la marca y un número de teléfono de contacto directo.

### 4.3.2. Landing Page Mock-Ups

<p align="center">
  <img src="https://github.com/user-attachments/assets/6262d3cc-b653-43be-bb78-e57071bcd3be" alt="Home mockup">
</p>

En la sección de Home de la Landing Page, como se evidencia en la imagen, se aplican estos principios a través de una estructura clara del menú superior que segmenta la información clave y de un diseño visual que establece una jerarquía clara, con el mensaje principal destacado para captar la atención inicial. La navegación intuitiva se facilita con etiquetas concisas y una llamada a la acción prominente que guía al usuario hacia el siguiente paso. La imagen de fondo contextualiza la oferta, mientras que el uso estratégico del color contribuye a la legibilidad y a una experiencia de usuario positiva al presentar la propuesta de valor de FitManager de forma directa y atractiva.

<p align="center">
  <img src="https://github.com/user-attachments/assets/533b355f-60a3-438f-9cde-8dda2e7ce326" alt="About mockup parte 1">
</p>

En la sección "About", se organiza la información con un título claro y FAQs temáticas. Se aplica jerarquía visual, contraste para leer fácil, y FAQs interactivas para no saturar la página, mejorando la experiencia del usuario al explorar la información de FitManager.

<p align="center">
  <img src="https://github.com/user-attachments/assets/02408b81-9e51-41bd-95d6-eb6a6959dc2b" alt="About mockup parte 2">
</p>

Se segmenta la información en categorías claras y concisas, facilitando la comprensión de las capacidades del software. Cada funcionalidad se describe brevemente con texto legible. La disposición en cuadrícula de estas funcionalidades ofrece una visión general organizada y permite al usuario explorar las características clave de manera eficiente. A la derecha, la inclusión de un reproductor de video prominente actúa como un elemento interactivo, atendiendo a diferentes preferencias de consumo de información y mejorando la experiencia del usuario al ofrecer una alternativa al texto estático.

<p align="center">
  <img src="https://github.com/user-attachments/assets/c1919f57-9cb9-43d5-9273-07eb78effcea" alt="About mockup parte 3">
</p>

La inclusión de "NUESTROS CLIENTES CONFIABLES" busca generar confianza a través de la prueba social. Además, el formulario de suscripción al boletín se integra para la captura de leads con una UI sencilla, demostrando una estrategia coherente de información y diseño para guiar y persuadir al usuario.

<p align="center">
  <img src="https://github.com/user-attachments/assets/1e2ef3bc-d87f-4d64-ab97-691716dca8db" alt="Contacto mockup parte 1">
</p>

Se integra un mapa interactivo que visualiza la ubicación física de la empresa. Este elemento de diseño permite a los usuarios ubicar geográficamente las oficinas de FitManager, facilitando la planificación de visitas o simplemente ofreciendo una referencia visual de su presencia física. La inclusión del mapa mejora la accesibilidad y la transparencia de la información de contacto.

<p align="center">
  <img src="https://github.com/user-attachments/assets/96e6b26f-78b9-4e5f-9d42-13d24dab4741" alt="Contacto mockup parte 2">
</p>

La sección "Contacto" de FitManager organiza la información esencial (dirección, correo, teléfono, horario) en un panel claro con iconos, separándola funcionalmente de un formulario directo para consultas. Esta estructura lógica y la interfaz con títulos destacados, iconos consistentes, campos claros y un botón prominente facilitan la rápida localización de datos y el envío de mensajes, ofreciendo accesibilidad y eficiencia al usuario.

<p align="center">
  <img src="https://github.com/user-attachments/assets/1a85812e-f146-4e28-a135-345c5615f43e" alt="Footer mockup">
</p>

El pie de página de FitManager organiza la información clave en columnas claramente etiquetadas para facilitar la navegación y el acceso a datos esenciales como la dirección, el correo electrónico, el horario de atención, enlaces a otras secciones del sitio y perfiles en redes sociales. La inclusión del logo de FitManager y un breve texto reforzando la propuesta de valor busca mantener la identidad de marca y recordar los beneficios principales.

## 4.4 Web Applications UX/UI Design

### 4.4.1. Web Applications Wireframes

<p align="center">
  <img src="https://github.com/user-attachments/assets/3a5e5794-46c4-4e30-91b7-f11ad61ce47e" alt="Inicio sesión wireframe">
</p>

La pantalla de inicio de sesión permitirá al usuario autenticarse en el sistema ingresando su correo electrónico y contraseña. Incluirá una opción para mostrar u ocultar la contraseña y un enlace para recuperarla en caso de olvido. También ofrecerá la posibilidad de iniciar sesión mediante cuentas de terceros como Google o Apple, así como un acceso directo para registrarse en caso de no contar con una cuenta.

<p align="center">
  <img src="https://github.com/user-attachments/assets/cdf4fecd-15b7-494c-ad9f-4f455b319302" alt="Resumen general wireframe">
</p>

La pantalla de resumen general, que también funcionará como pantalla de inicio, presentará información clave del sistema. Mostrará métricas como el número total de miembros registrados y la cantidad de miembros activos en tiempo real. También se incluirá un gráfico con estadísticas relevantes y un calendario que mostrará las clases programadas para el día.
En la parte superior se ubicará una barra de búsqueda que facilitará la navegación dentro de la aplicación web. A la izquierda, se encontrará un menú de navegación que permitirá acceder rápidamente a las distintas funcionalidades del sistema. Finalmente, en la esquina superior derecha se dispondrá un acceso rápido al perfil del usuario.

<p align="center">
  <img src="https://github.com/user-attachments/assets/6ede0607-887b-4672-b25e-6c23d0aad1d8" alt="Calendario wireframe">
</p>

La pantalla de calendario presentará una vista mensual con indicadores visuales para clases, reservas y notificaciones importantes. Contará con un minicalendario para cambiar rápidamente de mes y una sección informativa que mostrará en detalle las actividades del día seleccionado.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d8c0688d-d014-42dc-bc6c-0034a87b87e8" alt="Personal wireframe">
</p>

La pantalla de personal mostrará una lista con los miembros del equipo del gimnasio junto con información relevante. Esta lista incluirá un buscador para facilitar la búsqueda de un miembro específico, así como filtros para refinar los resultados. Además, se dispondrá de un botón para añadir nuevos miembros del personal. En la sección derecha de la pantalla, se visualizará un panel con los detalles del miembro seleccionado, incluyendo opciones como información de contacto y asignación de horarios.

<p align="center">
  <img src="https://github.com/user-attachments/assets/231e4b75-b906-41b2-adbd-d5e5228d1407" alt="Miembros wireframe">
</p>

La pantalla de miembros mostrará una lista con los integrantes del gimnasio, junto con información relevante como su nombre, estado y tipo de suscripción. Contará con un buscador para localizar rápidamente a un miembro específico, así como filtros para refinar la búsqueda. También incluirá un botón para añadir nuevos miembros.
En la parte derecha de la pantalla se visualizará un panel con los detalles del miembro seleccionado. A diferencia de la pantalla de personal, las opciones disponibles estarán orientadas a la gestión del cliente, permitiendo ver su historial de pagos, su rutina asignada o enviarle notificaciones.

<p align="center">
  <img src="https://github.com/user-attachments/assets/f3701629-4e27-4b05-bd31-0b4cc772311f" alt="Clases wireframe">
</p>

La pantalla de clases mostrará una lista con todas las clases registradas, junto con información relevante como nombre, tipo, entrenador, fecha, hora y estado. Cada clase en la lista contará con opciones para visualizar más detalles, editar su información o eliminarla. Además, la pantalla incluirá un buscador con filtros para facilitar la localización de clases específicas, así como un botón para añadir nuevas clases al sistema.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d68fbd41-1a89-497a-9046-90b50972d198" alt="Reservas wireframe">
</p>

La pantalla de reservas mostrará una lista con todas las reservas realizadas, incluyendo información relevante como el usuario, la clase, el entrenador, la fecha, la hora y el estado de la reserva. Cada ítem de la lista ofrecerá opciones para ver más detalles o eliminar la reserva. Además, se incluirá un buscador con filtros para facilitar la búsqueda de reservas específicas, así como un botón para registrar nuevas reservas en el sistema.

<p align="center">
  <img src="https://github.com/user-attachments/assets/3bc32cdf-44f9-4448-9a14-1787ca359f2a" alt="Ingresos wireframe">
</p>

La pantalla de ingresos y pagos mostrará un gráfico con información relacionada a los ingresos, una sección con datos generales correspondientes y una lista con los pagos realizados, incluyendo su información relevante. Al igual que en la lista de reservas, cada ítem tendrá opciones para ver más detalles o eliminar el registro. Además, se incluirá un buscador con filtros para facilitar la localización de pagos específicos.

<p align="center">
  <img src="https://github.com/user-attachments/assets/1ea12ec0-1ef0-4cb4-bdfa-6a3fd9b59669" alt="Asitencia wireframe">
</p>

En la pantalla de asistencia, la mayor parte del espacio estará ocupada por un mapa de calor que mostrará al usuario cuáles son las horas más concurridas de la semana. Además, contará con un apartado que incluye un resumen semanal y un resumen histórico de la asistencia.

<p align="center">
  <img src="https://github.com/user-attachments/assets/e38059ab-35a3-404e-95eb-ea1ef5a4ff0d" alt="Notificaciones wireframe">
</p>

La pantalla de notificaciones permite gestionar y visualizar los mensajes enviados dentro del sistema. Incluye un panel superior con un resumen de notificaciones recientes, un formulario central para crear nuevos avisos con campos como título, cuerpo, destinatarios y fecha, y un panel lateral derecho con un historial filtrable de notificaciones por día. Esta interfaz facilita la comunicación entre el gimnasio, sus miembros y el personal, manteniendo una estructura clara e intuitiva dentro del entorno general de navegación.

<p align="center">
  <img src="https://github.com/user-attachments/assets/a5bcd1fe-14eb-4db2-9037-c5c427af3348" alt="Perfil wireframe">
</p>

La pantalla de perfil mostrará información del usuario, así como ajustes generales de la aplicación, como el idioma, la zona horaria y las preferencias de notificaciones.

<p align="center">
  <img src="https://github.com/user-attachments/assets/158c1260-762d-4c66-ab3e-49949e2b9075" alt="Busqueda general wireframe">
</p>

Aquí se puede apreciar cómo funcionaría la barra de búsqueda general, mostrando un cuadro con los elementos que coincidan con los términos ingresados por el usuario.

<p align="center">
  <img src="https://github.com/user-attachments/assets/74b7209a-f61c-4ff1-8009-501394bbed19" alt="Detalle clase wireframe">
</p>

Esta es la pantalla de detalle de clase, a la cual se accede al presionar “Ver más detalles” en alguna de las clases listadas en la pantalla de clases. Aquí se muestran más datos específicos sobre la clase, así como la lista de participantes inscritos.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8af3dcac-9c77-4408-ab56-472a5f71af75" alt="Eliminar clase wireframe">
</p>

Esta es la pantalla de eliminación de clase, a la cual se accede al presionar “Eliminar clase” en alguna de las clases listadas en la pantalla de clases. Aquí se muestra la información de la clase que se desea eliminar, junto con una confirmación para proceder con la eliminación.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8fd70f36-78ab-4b22-b594-2bf8d8a3b1ba" alt="Agregar miembro wireframe">
</p>

Esta es la pantalla para añadir un nuevo miembro. En ella se presenta un formulario con los datos personales del miembro a completar, así como información relacionada con su membresía. Al final, se incluyen dos opciones: una para confirmar el registro del nuevo miembro y otra para cancelar la operación.

### 4.4.2. Web Applications Wireflow Diagrams

<p align="center">
  <img src="https://github.com/user-attachments/assets/b87d5169-2dc1-4af1-9588-4060739def88" alt="Wireflow 1">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/3a6439eb-8dc5-45e3-9c37-471282b4f987" alt="Wireflow 2">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/deba852e-06ae-437e-9903-085d56fc76ab" alt="Wireflow 3">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a3af1892-96ef-4946-b2e1-58738fae61f1" alt="Wireflow 4">
</p>

### 4.4.3. Web Applications Mock-up

<p align="center">
  <img src="https://github.com/user-attachments/assets/94752986-750a-4610-a915-da197b44fbf3" alt="Inicio sesion mockup">
</p>

El mockup de inicio de sesión de FitManager tiene una estructura centrada en email y contraseña, con un botón principal claro. Ofrece acceso rápido con Google y Apple, enlaces para olvidar contraseña y crear cuenta. Su diseño es limpio, legible y con opciones de seguridad. El logo refuerza la marca.

<p align="center">
  <img src="https://github.com/user-attachments/assets/e58d1ad1-9411-49fe-856f-949eaad3f034" alt="Resumen general mockup">
</p>

En la sección de "Resumen General", FitManager presenta una estructura de paneles informativos diseñada para ofrecer una visión rápida y completa del estado del gimnasio. Los paneles superiores destacan las métricas clave con números grandes y visualizaciones de tendencias para una fácil interpretación del rendimiento general. El gráfico de barras central de "Asistencia hoy" proporciona detalles horarios de la actividad, mientras que la lista de "Clases de Hoy" ofrece una visión cronológica de la programación. Los paneles inferiores resumen los indicadores financieros y de crecimiento, también con visualizaciones de tendencias. La organización modular y el uso consistente de iconos y colores facilitan la lectura y la comprensión de la información, permitiendo a los administradores obtener una perspectiva general del negocio de un vistazo.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d52ba736-8fb1-4e80-ab89-8834be6a0293" alt="Calendario mockup">
</p>

En la sección de “Calendario”, FitManager presenta una estructura de navegación temporal clara con una vista de calendario mensual principal que facilita la visualización general de la programación. Los botones de navegación permiten un desplazamiento intuitivo entre períodos de tiempo, y las pestañas "Día", "Semana", "Mes" ofrecen diferentes granularidades de la agenda. Un calendario miniatura adicional en la parte inferior izquierda proporciona un contexto temporal más amplio y una forma alternativa de seleccionar fechas. A la derecha, el panel contextual del día seleccionado organiza la información relevante en "Avisos" destacados y una lista detallada de "Clases Programadas" con sus horarios. El uso de colores sutiles para indicar la fecha actual y los elementos interactivos, junto con una tipografía legible, contribuye a una interfaz de usuario funcional y fácil de entender.

<p align="center">
  <img src="https://github.com/user-attachments/assets/c118367c-c2cb-46c0-b493-954f69cae977" alt="Personal mockup">
</p>

En la sección de "Personal", FitManager utiliza una tabla organizada y filtrable  para presentar la lista de empleados, con columnas relevantes como "Nombre", "Edad", "Rol", "Sueldo/h" y "Horas/s". La barra de búsqueda y el filtro permiten una localización eficiente de empleados específicos. Al seleccionar un empleado, se activa un panel lateral detallado que muestra una fotografía, información personal y laboral relevante, y botones de acción directos. Esta estructura de lista con detalles contextuales facilita la gestión individual de cada miembro del personal sin necesidad de navegar a otras secciones. La claridad de la tabla y la accesibilidad de las acciones contribuyen a una interfaz de usuario eficiente para la administración del personal.

<p align="center">
  <img src="https://github.com/user-attachments/assets/77e9fb5c-d7c6-4d6a-80d0-74c0fee9b205" alt="Miembros mockup">
</p>

La sección de "Miembros" sigue un modelo de diseño similar a la sección de "Personal", presentando una tabla organizada y filtrable con información clave de cada miembro: "Nombre", "Edad", "Estado M", "Tipo M" y "Caducidad". Al igual que en "Personal", una barra de búsqueda y un filtro facilitan la localización de miembros específicos, y un botón permite agregar nuevos registros. Al seleccionar un miembro, se despliega un panel lateral detallado con su fotografía, información personal y de membresía, y botones de acción directos. Esta consistencia en el patrón de diseño entre las secciones de "Personal" y "Miembros" mejora la usabilidad y la curva de aprendizaje al ofrecer una experiencia familiar para la gestión de diferentes tipos de registros dentro de la aplicación.

<p align="center">
  <img src="https://github.com/user-attachments/assets/d2d9b1f5-bc56-40e3-868b-7236910992c9" alt="Clases mockup">
</p>

En la sección de "Clases", FitManager utiliza una tabla detallada y organizada para presentar la programación de las actividades, incluyendo información relevante como "Nombre", "Tipo", "Entrenador", "Fecha", "Hora", "Duración", "Inscritos", "Estado" y acciones disponibles. Una barra de búsqueda y un filtro en la parte superior facilitan la localización de clases específicas. La codificación visual del estado de cada clase permite una rápida identificación de la situación de cada actividad. Las acciones por fila ofrecen un acceso directo a la gestión de cada clase. La estructura clara de la tabla y el uso de elementos visuales intuitivos contribuyen a una interfaz de usuario eficiente para la administración de la oferta de clases del gimnasio.

<p align="center">
  <img src="https://github.com/user-attachments/assets/640bf21f-9b1e-4707-9edc-68ea868451e6" alt="Reservas mockup">
</p>

La sección de "Reservas" comparte un diseño muy similar a la sección de "Clases", utilizando una tabla organizada y filtrable para presentar la información de las inscripciones a las actividades. Se incluyen detalles como "Id Reserva", "Usuario", "Clase", "Entrenador", "Fecha", "Hora", "Estado" y acciones disponibles. Al igual que en "Clases", una barra de búsqueda y un filtro facilitan la localización de reservas específicas, y se ofrece un botón para agregar nuevas reservas. El estado de la reserva se indica claramente en cada fila. Las acciones por fila permiten una gestión directa de las inscripciones. Esta coherencia en el diseño de la tabla y las funcionalidades entre "Clases" y "Reservas" mejora la usabilidad al ofrecer un patrón familiar para la administración de la programación y las inscripciones.

<p align="center">
  <img src="https://github.com/user-attachments/assets/efa2c4ea-c289-4234-9dd9-edd227472824" alt="Ingresos mockup">
</p>

En la sección de "Ingresos y Pagos", FitManager presenta una combinación de visualizaciones y datos tabulares para ofrecer una comprensión integral de la situación financiera. El gráfico de líneas superior ilustra la evolución de los ingresos por tipo de suscripción a lo largo del tiempo, facilitando la identificación de tendencias. El panel de "Información General" a la derecha proporciona un resumen conciso de las métricas financieras clave, incluyendo ganancias, ingresos y gastos. La tabla inferior detalla los registros de pagos individuales con información relevante como ID, destinatario/pagador, concepto, monto y fecha, permitiendo un seguimiento granular de las transacciones. La barra de búsqueda sobre la tabla facilita la localización de pagos específicos. Esta disposición en múltiples paneles permite a los usuarios obtener tanto una visión general como detalles específicos de los ingresos y pagos del gimnasio.

<p align="center">
  <img src="https://github.com/user-attachments/assets/78e4db28-8929-4b57-9e2d-e40be5b0a8b1" alt="Asistencia mockup">
</p>

En la sección de "Asistencia", FitManager utiliza una "Mapa de calor semanal" como elemento visual principal para representar la intensidad de la asistencia a lo largo de la semana y las horas del día, facilitando la identificación rápida de los horarios de mayor y menor actividad. Los colores cálidos indican mayor asistencia, mientras que los colores fríos indican menor. A la derecha, los paneles de "Resumen semanal" y "Resumen histórico" presentan datos cuantitativos clave, como la asistencia total por día, promedios diarios, faltas, porcentaje de asistencia general, hora pico, días de mayor y menor asistencia, y el usuario más frecuente. Esta combinación de una representación visual intuitiva y datos numéricos concisos permite a los administradores comprender y analizar los patrones de asistencia del gimnasio de manera eficiente.

<p align="center">
  <img src="https://github.com/user-attachments/assets/798b62d5-5090-405b-9798-a5aa397c6131" alt="Notificaciones mockup">
</p>

En la sección de "Notificaciones", FitManager presenta una estructura de gestión de comunicaciones centralizada. El panel superior de "Métricas de notificación" ofrece una visión general del volumen y el estado de las notificaciones. El panel de "Crear notificación" proporciona un formulario intuitivo para redactar y configurar nuevos mensajes, permitiendo especificar el título, cuerpo, destinatarios (con opciones flexibles), icono, fecha y hora de envío, y canales (Correo, SMS). Los botones de "Guardar", "Programar" y "Vista Previa" guían el proceso de creación. A la derecha, el "Historial de notificaciones" muestra un registro de las notificaciones enviadas y recibidas, organizadas por fecha y con detalles relevantes. El uso de iconografía clara y consistente para los tipos de notificaciones y las acciones, junto con una organización lógica de los campos y los paneles, facilita la gestión y el seguimiento de las comunicaciones con los miembros y el personal.

<p align="center">
  <img src="https://github.com/user-attachments/assets/811183e9-29de-480b-b244-a6ee5b5dbf1b" alt="Perfil mockup">
</p>

En la sección de "Mi Perfil", FitManager presenta una vista personalizada y organizada de la información del usuario. La parte superior muestra elementos de identificación visual como una imagen de perfil (del gimnasio), el nombre de usuario y el rol. La información se divide en dos paneles principales: "Información Personal" a la izquierda, con detalles de la cuenta y botones de acción claros para "Editar cuenta" y "Cerrar sesión" destacados visualmente. A la derecha, el panel de "Ajustes generales" permite la configuración de preferencias de la aplicación como idioma, unidad de medida, zona horaria, notificaciones y moneda, presentados en campos desplegables para facilitar la selección. El uso de iconografía intuitiva para los encabezados de los paneles y una tipografía legible contribuyen a una interfaz clara y fácil de usar para la gestión de la cuenta personal.

<p align="center">
  <img src="https://github.com/user-attachments/assets/54835863-c640-4e99-9499-506bbcec243e" alt="Búsqueda general mockup">
</p>

La barra de búsqueda, ubicada prominentemente en la parte superior central, demuestra un diseño intuitivo y eficiente para la localización de información. Al ingresar el término "Sal", se despliega inmediatamente un menú desplegable que sugiere resultados coincidentes: "Salomón Pereira", "Mohammed Salah", "Sally Saenz" y "Clases Salsa". Esta funcionalidad de autocompletado y sugerencias en tiempo real reduce el esfuerzo del usuario al anticipar sus posibles consultas y acelerar el proceso de búsqueda. La presentación de resultados relevantes tanto de miembros como de clases dentro del mismo menú ofrece una organización flexible de la información, permitiendo al usuario acceder rápidamente a diferentes tipos de datos relacionados con su búsqueda. La claridad visual del menú desplegable y la facilidad para seleccionar un resultado contribuyen a una experiencia de usuario fluida y eficaz.

<p align="center">
  <img src="https://github.com/user-attachments/assets/89c0a777-9f6a-41bd-899b-ae81947f55a2" alt="Detalle clase mockup">
</p>

Al seleccionar el icono de visualización en la lista de clases, FitManager despliega una ventana modal centrada que presenta información detallada sobre la clase específica. La información se organiza de forma clara y estructurada en dos columnas principales. A la izquierda, se detallan los atributos de la clase. A la derecha, se muestra una Lista de participantes, proporcionando los nombres de los usuarios inscritos en la clase. La etiqueta clara y concisa de cada dato facilita su comprensión. Un botón de "Editar" en la parte superior derecha permite acceder a la modificación de la información de la clase directamente desde esta vista. La modalidad centrada asegura que la atención del usuario se enfoque en los detalles de la clase seleccionada sin perder el contexto de la lista general.

<p align="center">
  <img src="https://github.com/user-attachments/assets/4cfdc4a7-b250-46a7-90fd-820ae908de00" alt="Eliminar clase mockup">
</p>

Al seleccionar el icono de eliminación de una clase, FitManager despliega una ventana modal de confirmación centrada con la pregunta clara "¿Estás seguro de que deseas eliminar esta clase?". Esta acción preventiva busca evitar eliminaciones accidentales. Debajo de la pregunta, se muestra un resumen conciso de la clase a eliminar, proporcionando al usuario el contexto necesario para tomar una decisión informada. Se ofrecen dos botones de acción claramente diferenciados: un botón secundario "Cancelar" para mantener la clase y cerrar la ventana, y un botón primario en color rojo "Eliminar clase" para confirmar la acción destructiva. La prominencia del botón de eliminación en rojo advierte sobre la irreversibilidad de la acción. La modalidad centrada y el lenguaje claro aseguran que el usuario comprenda la pregunta y las opciones disponibles antes de proceder.

<p align="center">
  <img src="https://github.com/user-attachments/assets/ad5aefb5-564f-4771-8a0f-03195ddfc18f" alt="Agregar miembro mockup">
</p>

Al seleccionar el botón "Agregar Miembro", FitManager despliega una ventana modal centrada con el título claro "Añadir miembro", guiando al usuario a través del proceso de incorporación de un nuevo cliente. El formulario presenta campos de entrada claramente etiquetados para la información esencial del miembro. A la derecha, se incluyen campos específicos para la información de la membresía: Tipo de membresía (con un menú desplegable), Fecha de inicio y Fecha de fin (con selectores de calendario), y la opción de seleccionar una Foto de perfil. La organización lógica de los campos, agrupando la información personal y los detalles de la membresía, facilita la entrada de datos. Se ofrecen dos botones de acción claramente diferenciados en la parte inferior: "Cancelar" para cerrar el formulario sin guardar y "Añadir miembro" en color azul para confirmar y guardar la nueva entrada. La modalidad centrada asegura que el usuario se enfoque en la tarea de agregar un nuevo miembro sin interactuar con el resto de la interfaz.

### 4.4.4. Web Applications User Flow Diagrams

<p align="center">
  <img src="https://github.com/user-attachments/assets/2b8c17cc-8daa-4d5a-ba12-790a36813c28" alt="User flow 1">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/78df650f-83a0-46f2-9b09-0873fdb94917" alt="User flow 2">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/449dc512-c1b8-403f-893c-fbabe7443b23" alt="User flow 3">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/6871e438-fbe9-44d5-8d26-a28e178c3a50" alt="User flow 4">
</p>

## 4.5. Web Applications Prototyping

Como parte del proceso de diseño de la aplicación móvil, se elaboraron wireframes y mockups detallados que sirvieron como base para la construcción del prototipo interactivo. Los wireframes permitieron definir la estructura general de cada pantalla, priorizando la organización del contenido y la navegación fluida. Posteriormente, se desarrollaron mockups de alta fidelidad que representaron visualmente la interfaz final, incorporando elementos gráficos, iconografía y jerarquías visuales consistentes. Estas representaciones visuales facilitaron la validación temprana del diseño, permitiendo detectar oportunidades de mejora antes del desarrollo. El uso combinado de wireframes y mockups contribuyó significativamente a garantizar una experiencia de usuario coherente, accesible y centrada en las necesidades reales de los usuarios finales.

## 4.6. Domain-Driven Software Architecture

El Domain-Driven Software Architecture extiende los principios del Domain Driven Design a la estructura general de un sistema de software. En lugar de centrarse únicamente en el modelo del dominio dentro de un contexto delimitado, busca organizar todo el sistema en torno a los diferentes subdominios del negocio. Cada subdominio se puede implementar como un servicio o un módulo autónomo, con su propio modelo de dominio explícito y un lenguaje ubicuo compartido entre los expertos del dominio y el equipo de desarrollo responsable de ese subdominio. Esta arquitectura promueve la independencia y la cohesión dentro de cada subdominio, facilitando la escalabilidad, la mantenibilidad y la alineación del software con las necesidades del negocio.

### 4.6.1. Software Architecture Context Diagram

<p align="center">
  <img src="https://github.com/user-attachments/assets/cd6c576e-1da6-4d06-8d4b-1d9419e96eff" alt="Diagrama contexto">
</p>

### 4.6.2. Software Architecture Container Diagram

<p align="center">
  <img src="https://github.com/user-attachments/assets/7b71e2e6-c17a-4337-9775-51303d443dba" alt="Diagrama contenedores">
</p>

### 4.6.3. Software Architecture Components Diagram

<p align="center">
  <img src="https://github.com/user-attachments/assets/d27110ce-fcb7-4889-b39f-0a29eef2e47b" alt="Diagrama componentes">
</p>

## 4.7. Software Object-Oriented Design

### 4.7.1. Class Diagram

<p align="center">
  <img src="https://github.com/user-attachments/assets/dcf9ca78-9aef-4b83-9453-786bd90a2aea" alt="Diagrama clases">
</p>

### 4.7.2. Class Dictionary

* Personal: Representa a un empleado del gimnasio con información como nombre, salario y rol.
* Clase: Representa una sesión de ejercicio programada con detalles como nombre, horario y tipo.
* Notificacion: Representa un mensaje a ser enviado a un usuario, con contenido y tipo.
* Miembro: Representa a un cliente del gimnasio con información personal.
* EnvioNotis: Coordina el envío de notificaciones a los usuarios.
* GestorClasesPersonal: Gestiona la asignación de personal (entrenadores) a las clases.
* Reserva: Representa la reserva de un miembro para asistir a una clase.
* GestionReservaClase: Gestiona el proceso de reserva de clases por parte de los miembros.
* Asistencia: Registra la presencia de un miembro en una clase específica.
* Pago: Representa una transacción de pago realizada por un miembro.
* GestionPagoMiembro: Gestiona el procesamiento y registro de los pagos de los miembros.
* Membresia: Representa el plan de suscripción que un miembro tiene con el gimnasio. 

## 4.8. Database Design

### 4.8.1. Database Diagram

<p align="center">
  <img src="https://github.com/user-attachments/assets/ea4d6006-9a0c-4361-8577-b074ffac72ca" alt="Database Diagram">
</p>

# CAPÍTULO 5: PRODUCT IMPLEMENTATION & DEPLOYMENT

## 5.1. Software Configuration Management

El Software Configuration Management (SCM) desempeña un papel esencial en el proceso de desarrollo, ya que permite mantener el control y la consistencia de versiones y configuraciones durante todo el ciclo de vida del producto. De acuerdo con Configu Editorial Team (2024), el SCM promueve una colaboración eficiente entre los equipos, facilita el manejo de cambios complejos y asegura que todos los involucrados trabajen dentro de un entorno uniforme y alineado.

### 5.1.1. Software Development Environment Configuration

| Producto             | Propósito en el Proyecto                                   | Categoría              | Ruta de Descarga / Acceso                            | Descripción |
|----------------------|------------------------------------------------------------|-------------------------|------------------------------------------------------|-------------|
| JetBrains Rider      | Desarrollo del backend en C#                               | Software Development    | https://www.jetbrains.com/rider/                     | JetBrains Rider es un entorno de desarrollo integrado (IDE) que proporciona herramientas avanzadas para desarrollar aplicaciones backend en C# de manera eficiente. |
| JetBrains Toolbox    | Gestión centralizada de IDEs JetBrains                     | Software Development    | https://www.jetbrains.com/toolbox-app/              | JetBrains Toolbox es una aplicación que permite gestionar y actualizar todos los IDEs de JetBrains, facilitando su uso y mantenimiento dentro del proyecto. |
| JetBrains WebStorm   | Desarrollo del frontend con Vue.js                         | Software Development    | https://www.jetbrains.com/webstorm/                 | WebStorm es un IDE ideal para desarrollo frontend con Vue.js, proporcionando funcionalidades como autocompletado, depuración y administración de proyectos. |
| Node.js              | Entorno de ejecución para JavaScript / soporte Vue.js      | Software Development    | https://nodejs.org/                                 | Node.js es un entorno de ejecución para JavaScript que permite ejecutar código del lado del servidor, y es fundamental para integrar Vue.js en la aplicación. |
| Vue.js               | Framework JavaScript para el frontend                      | Software Development    | https://vuejs.org/                                  | Vue.js es un framework progresivo para construir interfaces de usuario interactivas, permitiendo crear componentes dinámicos y reactivas en el frontend del proyecto. |
| MySQL                | Gestión de base de datos del sistema                       | Software Development    | https://www.mysql.com/downloads/                    | MySQL es un sistema de gestión de bases de datos relacional utilizado para almacenar y gestionar datos en el backend, esencial para el sistema del gimnasio. |
| Visual Studio Code   | Desarrollo de la landing page                              | Software Development    | https://code.visualstudio.com/                      | Visual Studio Code es un editor de código fuente ligero y potente que soporta múltiples lenguajes y es ideal para el desarrollo rápido de la landing page. |
| Bootstrap            | Framework CSS para diseño responsivo de la landing page    | Software Development    | https://getbootstrap.com/                           | Bootstrap es un framework CSS que facilita el diseño de interfaces web responsivas, permitiendo que la landing page se vea correctamente en diferentes dispositivos. |
| Swiper CSS           | Carruseles y sliders interactivos en la landing page       | Software Development    | https://swiperjs.com/                               | Swiper es una librería de JavaScript para crear sliders y carruseles interactivos, mejorando la experiencia de usuario en la landing page. |
| AOS.js               | Animaciones de scroll en la landing page                   | Software Development    | https://michalsnik.github.io/aos/                   | AOS.js es una librería de animaciones de desplazamiento que agrega efectos visuales al hacer scroll en la landing page, mejorando su dinamismo y atractivo. |
| GitHub               | Control de versiones y repositorio de código               | Software Development    | https://github.com/                                 | GitHub es una plataforma de alojamiento de código que permite controlar versiones, gestionar proyectos y colaborar de manera eficiente con equipos de desarrollo. |
| GitHub Desktop       | Cliente visual de GitHub para gestión de repositorios      | Software Development    | https://desktop.github.com/                         | GitHub Desktop es una herramienta que permite gestionar repositorios de GitHub de manera visual y sencilla, facilitando el manejo de versiones del código fuente. |
| Figma                | Diseño de interfaces y prototipos UI/UX                    | Product UX/UI Design    | https://www.figma.com/                              | Figma es una herramienta de diseño de interfaces que permite crear prototipos de alta fidelidad, ideal para la creación de la experiencia de usuario del proyecto. |
| Lucidchart           | Diagramación de arquitectura, flujos y procesos            | Product UX/UI Design    | https://www.lucidchart.com/                         | Lucidchart es una herramienta de diagramación en línea que facilita la creación de flujos, mapas de procesos y diagramas de arquitectura, clave para planificar el sistema. |
| Pivotal Tracker      | Gestión ágil de tareas y backlog del equipo                | Project Management      | https://www.pivotaltracker.com/                     | Pivotal Tracker es una herramienta de gestión ágil que permite gestionar el progreso de tareas, sprints y el backlog del equipo, esencial para la planificación de proyectos. |
| UXPressia            | Creación de mapas de experiencia de usuario                | Product UX/UI Design    | https://uxpressia.com/                              | Herramienta enfocada en la creación de journey maps y perfiles de usuario, útil para visualizar la experiencia del usuario en el sistema. |
| Structurizr          | Modelado de arquitectura de software                       | Product UX/UI Design    | https://structurizr.com/                            | Herramienta para crear modelos de arquitectura de software basada en el modelo C4, útil para documentar sistemas complejos. |







### 5.1.2. Source Code Management

Para la gestión del código fuente en FitManager, se utilizará Git como sistema de control de versiones, implementando el modelo de trabajo GitFlow. Esta metodología permitirá llevar un seguimiento estructurado de los cambios en el código, facilitando tanto el desarrollo de nuevas funcionalidades como la corrección de errores. Los repositorios estarán alojados en GitHub y estarán organizados bajo una estructura de ramas clara. Además de la rama principal main, se crearán las siguientes ramas: develop, feature, release y hotfix. Esta estructura garantizará una colaboración eficiente y un acceso ordenado al proyecto por parte de todo el equipo.

Repositorio de Frontend Web Applications: https://github.com/FitFlow-AppWeb/FitManager

Repositorio del landing page: https://github.com/FitFlow-AppWeb/FitManagerLanding

Repositorio de los web services: https://github.com/FitFlow-AppWeb/FitManager-Web-Services

### 5.1.3. Source Code Style Guide & Conventions

Para mantener la coherencia, legibilidad y calidad del código fuente en FitManager, se seguirán convenciones de estilo claras y uniformes. Todo el código deberá escribirse siguiendo buenas prácticas como la correcta indentación, nombres de variables y funciones descriptivas, comentarios útiles y organizados, y separación lógica de responsabilidades. Asimismo, se establecerán convenciones específicas según el lenguaje y entorno utilizado.

Espaciado

El espaciado del código en FitManager seguirá una convención clara para asegurar legibilidad y facilitar el mantenimiento. Se utilizarán 2 espacios por nivel de indentación. Se dejará un espacio después de comas, operadores y palabras clave como if, for o while, y no se dejarán espacios innecesarios antes de paréntesis o llaves. Además, se incluirán líneas en blanco entre bloques de código lógico (como funciones o secciones dentro de una misma función) para mejorar la organización visual. Esta convención busca reducir la fricción durante el trabajo colaborativo y facilitar la revisión del código en equipos de desarrollo.

<p align="center">
  <img src="https://github.com/user-attachments/assets/eee32723-0221-4be7-8aec-841fde5353ea" alt="Espaciado">
</p>

Nomenclatura

Para la denominación de entidades como archivos, variables y clases, se utilizará el idioma inglés, promoviendo así una mayor compatibilidad y comprensión en entornos de desarrollo globales. Los nombres se escribirán en minúsculas, y en caso de requerir la separación de palabras, se emplearán guiones en lugar de espacios. Esta convención no solo mejora la claridad, sino que también favorece la uniformidad en el código, facilitando su comprensión, mantenimiento y colaboración entre todos los miembros del equipo.

<p align="center">
  <img src="https://github.com/user-attachments/assets/06ddc334-8d62-4405-b085-005a9658ccff" alt="Nomenclatura">
</p>

Comentarios

Los comentarios en FitManager serán utilizados de manera estratégica para mejorar la comprensión del código, sin recargarlo innecesariamente. Se emplearán para explicar secciones complejas, detallar la lógica detrás de ciertas decisiones de implementación o marcar tareas pendientes. Siempre se redactarán en inglés, de forma clara y concisa. Se evitarán comentarios obvios o redundantes que describan lo evidente. Además, se fomentará el uso de comentarios estructurados y consistentes para facilitar la lectura, especialmente en funciones extensas o con lógica crítica. Un buen comentario debe agregar valor y contexto al código, no simplemente repetir lo que ya se puede deducir a simple vista.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8d26de96-cd89-4448-b32e-82e131a9ce61" alt="Comentarios 1">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/83c0a3af-caf7-4810-aa18-e7d38e187def" alt="Comentarios 2">
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/7c1ded73-fbd0-4d52-b3da-bee907772a4e" alt="Comentarios 3">
</p>

Commits

Los mensajes de commit en FitManager seguirán una estructura clara y estandarizada para facilitar el seguimiento del historial de cambios y mejorar la colaboración en equipo. Cada mensaje debe ser breve pero descriptivo, redactado en tiempo presente y en inglés (por ejemplo: “Add 1.1.1. Section”, “Add payment component”). Se recomienda comenzar con un verbo que indique la acción realizada y evitar frases genéricas como “update” o “change” sin contexto. En caso de commits más complejos, se puede incluir un cuerpo adicional explicando el motivo del cambio o su impacto. Mantener esta convención ayuda a que el historial del repositorio sea legible y útil tanto para el equipo actual como para futuros desarrolladores.

<p align="center">
  <img src="https://github.com/user-attachments/assets/898779a4-c366-493b-8023-b05ce62db9d6" alt="Nomenclatura">
</p>

### 5.1.4. Software Deployment Configuration

Para el proceso de despliegue, empleamos GitHub como plataforma principal, asegurándonos de seguir una serie de pasos estructurados para garantizar un flujo de trabajo eficiente y sin contratiempos. A continuación, describimos los pasos que seguimos para llevar a cabo el despliegue de manera ordenada y efectiva:

<p align="center">
  <img src="https://github.com/user-attachments/assets/608b510a-9bff-4a5d-a4ce-e63da3534595" alt="Paso 1 SDC">
</p>

Abrimos el repositorio de la landing page

<p align="center">
  <img src="https://github.com/user-attachments/assets/6eb930ce-2f0e-4fc0-9468-d32d7cc562d9" alt="Paso 2 SDC">
</p>

Nos dirigimos a la sección "Settings" y le damos click a "Pages"

<p align="center">
  <img src="https://github.com/user-attachments/assets/f4228b25-956f-45ae-8ec6-a451ca9a21cf" alt="Paso 3 SDC">
</p>

Nos aseguramos que el source sea “Deploy from a branch”. Escogemos la rama que vamos a desplegar, en nuestro caso la rama main, escogemos el root y le damos a guardar

<p align="center">
  <img src="https://github.com/user-attachments/assets/f153d046-796d-4747-a33a-401ec501e76f" alt="Paso 4 SDC">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/235ca588-0cf0-489a-953b-f82b10faa8fa" alt="Paso 5 SDC">
</p>

Volvemos a la sección "Code" y veremos un punto amarillo, al cual le daremos click y luego se expandirá y tendremos que ir a "Details"

<p align="center">
  <img src="https://github.com/user-attachments/assets/ee348c3c-12e1-4f3b-98ed-bc29af27338e" alt="Paso 6 SDC">
</p>

Esperamos a que se terminen todas y luego nos dirigimos de vuelta a "Settings" y luego a "Pages"

<p align="center">
  <img src="https://github.com/user-attachments/assets/aefab390-87b4-45cd-886c-2a55deaaa5d1" alt="Paso 7 SDC">
</p>

Podremos visualizar el link de la landing page y luego le damos click para visitarla

<p align="center">
  <img src="https://github.com/user-attachments/assets/9be33ab0-0b48-414a-a399-f26a5f2cef3b" alt="Paso 8 SDC">
</p>

La landing page ya está desplegada.

## 5.2. Landing Page, Services & Applications Implementation

### 5.2.1. Sprint 1

En esta sección se documenta el progreso alcanzado durante el Sprint 1 del proyecto FitManager, abordando tanto el desarrollo del producto como la dinámica de trabajo en equipo. Se detallan los objetivos planificados, la distribución de responsabilidades, el backlog de tareas y las evidencias del desarrollo y despliegue. Esta estructura permite visualizar de forma ordenada el avance logrado y sentar las bases para los siguientes ciclos de trabajo.

#### 5.2.1.1. Sprint Planning

| **Sprint #**                     | Sprint 1 |
|----------------------------------|---------|
|        | **Sprint Planning Background** |
| Date                             | 22/04/2025 |
| Location                         | Discord |
| Prepared by                      | Victor Ortiz |
| Attendees (to planning meeting)  | Juan Alvarado, Renzo Luque, Cassius Martel, Tomio Nakamurakare, Victor Ortiz |
| Sprint 0 Review Summary          | Este es el primer sprint del proyecto, por lo tanto no existe un sprint anterior a evaluar. Las actividades previas se enfocaron en la ideación del producto, validación de problemas mediante entrevistas y elaboración del backlog inicial. |
| Sprint 0 Retrospective Summary   | Se hizo el desarrollo de la introducción, requerimientos y diseño del producto de manera colaborativa y eficaz |
|      | **Sprint Goal & User Stories** |
| Sprint 1 Goal                    | Nos enfocaremos en desplegar la primera versión de la página de aterrizaje pública de FitManager. Creemos que esto aporta visibilidad y credibilidad a clientes potenciales (dueños y administradores de gimnasios), permitiéndoles conocer la propuesta de valor de la plataforma. Esto se confirmará cuando la página esté publicada, sea accesible y contenga secciones clave como sobre nosotros, nuestras funcionalidades, planes y contacto. |
| Sprint 1 Velocity                | 12 |
| Sum of Story Points              | 27 |

#### 5.2.1.2. Aspect Leaders and Collaborators

| Team Member                         | Diseño UX | Diseño UI - Wireframes | Diseño UI - MockUps | Diseño Landing Page | Control de versiones |
|-------------------------------------|-----------|-------------------------|----------------------|----------------------|-----------------------|
| Alvarado De La Cruz, Juan Carlos   | C         | C                       | -                    | C                    | C                     |
| Luque Minaya, Renzo Andrés         | C         | L                       | -                    | C                    | C                     |
| Martel Andrade, Cassius Estefano   | L         | C                       | L                    | C                    | C                     |
| Nakamurake Teruya, Alex Tomio      | C         | C                       | C                    | C                    | L                     |
| Ortiz Alarcón, Victor Nicolás      | C         | C                       | C                    | L                    | C                     |

#### 5.2.1.3 Sprint Backlog 1

| Sprint #       | Sprint #1 |      |      |      |      |
|----------------|-----------|------|------|------|------|
|      | Work-Item / Task |      |      |      |      |
| User Story ID | Task ID | Description                                         | Estimation (Hours) | Assigned To                        | Status |
| US14          | T01     | Crear la estructura de la sección principal         | 1                  | Ortiz Alarcón, Victor Nicolás       | Done   |
|               | T02     | Diseñar la parte visual de la sección principal     | 1                  | Ortiz Alarcón, Victor Nicolás       | Done   |
|               | T03     | Crear la estructura de la sección sobre nosotros    | 1                  | Ortiz Alarcón, Victor Nicolás       | Done   |
|               | T04     | Diseñar la parte visual de la sección sobre nosotros| 2                  | Ortiz Alarcón, Victor Nicolás       | Done   |
|               | T05     | Crear la estructura de la sección de muestra        | 1                  | Ortiz Alarcón, Victor Nicolás       | Done   |
|               | T06     | Diseñar la parte visual de la sección de muestra    | 1                  | Ortiz Alarcón, Victor Nicolás       | Done   |
| US15          | T07     | Crear la estructura de la sección de contacto       | 1                  | Ortiz Alarcón, Victor Nicolás       | Done   |
|               | T08     | Diseñar la parte visual de la sección de contacto   | 1                  | Ortiz Alarcón, Victor Nicolás       | Done   |
|               | T09     | Crear el formulario de contacto                     | 1                  | Ortiz Alarcón, Victor Nicolás       | Done   |
| US16          | T10     | Crear la estructura de la sección de planes         | 1                  | Martel Andrade, Cassius Estefano    | Done   |
|               | T11     | Diseñar la parte visual de la sección de planes     | 1                  | Martel Andrade, Cassius Estefano    | Done   |
| US02          | T12     | Diseño UX sección horarios                          | 2                  | Martel Andrade, Cassius Estefano    | Done   |
|               | T13     | Diseño UI sección horarios                          | 3                  | Martel Andrade, Cassius Estefano    | Done   |
| US01          | T14     | Diseño UX sección calendario                        | 2                  | Martel Andrade, Cassius Estefano    | Done   |
|               | T15     | Diseño UI sección calendario                        | 3                  | Martel Andrade, Cassius Estefano    | Done   |
| US06          | T16     | Diseño UX sección ingresos y pagos                  | 2                  | Nakamurake Teruya, Alex Tomio       | Done   |
|               | T17     | Diseño UI sección ingresos y pagos                  | 3                  | Nakamurake Teruya, Alex Tomio       | Done   |
| US10          | T18     | Diseño UX sección personal                          | 2                  | Nakamurake Teruya, Alex Tomio       | Done   |
|               | T19     | Diseño UI sección personal                          | 3                  | Nakamurake Teruya, Alex Tomio       | Done   |
| US09          | T20     | Diseño UX sección miembros                          | 2                  | Nakamurake Teruya, Alex Tomio       | Done   |
|               | T21     | Diseño UI sección miembros                          | 3                  | Nakamurake Teruya, Alex Tomio       | Done   |
| US12          | T22     | Diseño UX sección notificaciones                    | 2                  | Martel Andrade, Cassius Estefano    | Done   |
|               | T23     | Diseño UI sección notificaciones                    | 3                  | Martel Andrade, Cassius Estefano    | Done   |

Icebox de las historias de usuario pendientes (no iniciadas en este sprint)
<p align="center">
  <img src="https://github.com/user-attachments/assets/c733ecc4-6d21-41a1-9f0b-ebb1c9d1fc23" alt="Icebox US pendientes">
</p>

Historias de usuario empezadas y finalizadas del sprint
<p align="center">
  <img src="https://github.com/user-attachments/assets/a90172d6-d285-4ea7-b711-8da2a6d80b9a" alt="Icebox US sprint 1">
</p>

Épicas
<p align="center">
  <img src="https://github.com/user-attachments/assets/943e82bd-5128-4978-9b9d-57a2380e77a7" alt="Épicas">
</p>

#### 5.2.1.4. Development Evidence for Sprint Review

Durante el Sprint 1, el equipo completó todas las tareas asociadas al desarrollo de la primera versión del Landing Page de FitManager. Se desarrollo el header, la sección inicio, la sección sobre nosotros, la sección de muestra, la sección de planes, la sección de contacto y el footer. Respecto a la aplicación web, se realizó el diseño UX/UI para facilitar el avance de este en los siguientes sprints.

| Repository                                                 | Branch              | Commit ID                                | Commit Message                                      | Commit Message Body | Committed On |
|------------------------------------------------------------|---------------------|-------------------------------------------|----------------------------------------------------|----------------------|---------------|
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/start       | 9de3cc2098d2030e78e46f7a32bd34cbc92af889  | Iniciamos la landing muchachos                    | -                    | 22/04         |
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/error-404   | 46d7918588f1f346d7650cfac4fb2080a3a61f57  | Error 404                                         | -                    | 22/04         |
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/home        | 0260e775fad14d1dfb921dc9a89995f1b7b8d6a8  | Feat: adding index structure                      | -                    | 22/04         |
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/styles      | e32b9db6cd7c07ab5644e1141176d8b996b8ef29  | Feat: add video popup functionality and styling   | -                    | 22/04         |
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/Contactanos | be1b17e184cdbe4625c64aee490b655e5f3c516e  | Contactanos                                       | -                    | 22/04         |
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/planes      | 6702e74fcbd06fb6faeadc64533869ffd5dc0b45  | Pricing y estilos                                 | -                    | 22/04         |
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/muestra     | ffb97d747e787d36f58f4265b54115bace8f2e96  | Agregamos muestra de horario y algunas funciones  | -                    | 22/04         |
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/about       | 2a2ca7b51007b5a2cfe86990719b6533806f4fa3  | Add about section                                 | -                    | 23/04         |
| https://github.com/FitFlow-AppWeb/FitManagerLanding           | feature/fix         | f45faba3e6438a5b1efdaa1ca0b1ef38aeb4c1d0  | Fix "Muestras"                                    | -                    | 23/04         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 6291838345e1f8a58aefab5125413f223eb2279f  | Add 1.1.1. section                                | -                    | 21/04         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 487af506a39bbb976ccb9f7a75781df6232bf482  | Add 1.1.2. section                                | -                    | 21/04         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | fd1393f4e633bf14c13279d3022dd71666adc338  | Add 1.2.1. section                                | -                    | 21/04         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 04a44a9bed5a761f5b61c8bc9aac6c9794d4b111  | Add 1.2.2. section                                | -                    | 25/05         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 969792cfa821ff377671f440c0afb142617b1d03  | Add 1.3. section                                  | -                    | 25/05         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 227936ebd0636ff776c04398ad50902e614d7fa8  | Add 1.4. section                                  | -                    | 25/05         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 0898d619ae448f6782c51075a64696934a4b457f  | Add chapter 2                                     | -                    | 25/05         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 30ece3f00d2ee0f631446d2b98082cc1d011a8ec  | Add chapter 3                                     | -                    | 25/05         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 3c6ce197d7f98e2b7cb13155889e3db7b304c4cf  | Add chapter 4                                     | -                    | 25/05         |
| https://github.com/FitFlow-AppWeb/FitManager                       | develop             | 51a47c4ea35a3d84ea0b2a582f4d1083c1307ec5  | Add chapter 5                                     | -                    | 25/05         |


#### 5.2.1.5. Execution Evidence for Sprint Review.

Durante el Sprint 1 se completó y desplegó la primera versión funcional del Landing Page de FitManager, logrando cumplir con el objetivo establecido en el Sprint Planning. Esta entrega incluyó el diseño, maquetación e implementación de las secciones informativas clave: descripción del producto, características principales, paquetes de suscripción, formulario de contacto y una galería visual del producto.

#### 5.2.1.6. Services Documentation Evidence for Sprint Review

Durante el Sprint 1 no se desarrollaron Web Services ni endpoints funcionales, ya que el alcance del sprint estuvo centrado exclusivamente en el diseño, desarrollo y despliegue del Landing Page de FitManager. Por tanto, no se generó documentación técnica relacionada a APIs REST ni se utilizó OpenAPI.

#### 5.2.1.7. Software Deployment Evidence for Sprint Review

Al cierre del Sprint 1, se logró el despliegue exitoso de la primera versión del Landing Page de FitManager, cumpliendo con los objetivos establecidos para esta iteración. A continuación, se detallan las evidencias del proceso de despliegue:

Para el proceso de despliegue, empleamos GitHub como plataforma principal, asegurándonos de seguir una serie de pasos estructurados para garantizar un flujo de trabajo eficiente y sin contratiempos. A continuación, describimos los pasos que seguimos para llevar a cabo el despliegue de manera ordenada y efectiva:

<p align="center">
  <img src="https://github.com/user-attachments/assets/608b510a-9bff-4a5d-a4ce-e63da3534595" alt="Paso 1 SDC">
</p>

Abrimos el repositorio de la landing page

<p align="center">
  <img src="https://github.com/user-attachments/assets/6eb930ce-2f0e-4fc0-9468-d32d7cc562d9" alt="Paso 2 SDC">
</p>

Nos dirigimos a la sección "Settings" y le damos click a "Pages"

<p align="center">
  <img src="https://github.com/user-attachments/assets/f4228b25-956f-45ae-8ec6-a451ca9a21cf" alt="Paso 3 SDC">
</p>

Nos aseguramos que el source sea “Deploy from a branch”. Escogemos la rama que vamos a desplegar, en nuestro caso la rama main, escogemos el root y le damos a guardar

<p align="center">
  <img src="https://github.com/user-attachments/assets/f153d046-796d-4747-a33a-401ec501e76f" alt="Paso 4 SDC">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/235ca588-0cf0-489a-953b-f82b10faa8fa" alt="Paso 5 SDC">
</p>

Volvemos a la sección "Code" y veremos un punto amarillo, al cual le daremos click y luego se expandirá y tendremos que ir a "Details"

<p align="center">
  <img src="https://github.com/user-attachments/assets/ee348c3c-12e1-4f3b-98ed-bc29af27338e" alt="Paso 6 SDC">
</p>

Esperamos a que se terminen todas y luego nos dirigimos de vuelta a "Settings" y luego a "Pages"

<p align="center">
  <img src="https://github.com/user-attachments/assets/aefab390-87b4-45cd-886c-2a55deaaa5d1" alt="Paso 7 SDC">
</p>

Podremos visualizar el link de la landing page y luego le damos click para visitarla

<p align="center">
  <img src="https://github.com/user-attachments/assets/9be33ab0-0b48-414a-a399-f26a5f2cef3b" alt="Paso 8 SDC">
</p>

La landing page ya está desplegada.

#### 5.2.1.8. Team Collaboration Insights during Sprint

Durante el desarrollo del Sprint 1, el equipo de FitManager mantuvo una dinámica de colaboración efectiva y constante. Al ser el primer sprint del proyecto, se establecieron acuerdos clave sobre la metodología de trabajo, herramientas de comunicación y canales para el seguimiento de tareas. A continuación, se muestra evidencia de la participación de cada uno de los miembros del equipo:

<p align="center">
  <img src="https://github.com/user-attachments/assets/8f9c030a-50c6-4b12-adf5-aaa1991f3e44" alt="Insights landing page">
</p>

En esta imagen se aprecia la sección "Insights" de Github, donde se puede ver la cantidad de commits realizada por usuarios. Se evidencia que todos participaron en los commits de la landing page.

<p align="center">
  <img src="https://github.com/user-attachments/assets/3aa24654-5dfc-4351-8029-15b85023afa1" alt="Commits READ.ME">
</p>

Por otro lado, en esta imagen se ve que todos participaron también en los commits del readme

### 5.2.2. Sprint 2

Continuando con el desarrollo del proyecto FitManager, el Sprint 2 se centró en el desarrollo del frontend para las funcionalidades clave de la aplicación web. Este sprint tuvo como objetivo principal la creación de las secciones de gestión de miembros, personal, clases, inventario, notificaciones e ingresos del gimnasio. Adicionalmente, se abordó la implementación del soporte para accesibilidad e internacionalización en la plataforma. Este ciclo iterativo avanzó sobre las bases de diseño UX/UI y la arquitectura DDD definidas en el sprint anterior, comenzando a materializar la interfaz con la que los administradores y dueños de gimnasios gestionan sus recursos operativos y financieros. A continuación, se detallan los componentes de este sprint:

#### 5.2.2.1. Sprint Planning

| **Sprint #**                     | Sprint 2 |
|----------------------------------|---------|
|        | **Sprint Planning Background** |
| Date                             | 07/05/2025 |
| Location                         | Discord group call |
| Prepared by                      | Cassius Martel |
| Attendees (to planning meeting)  | Juan Alvarado, Renzo Luque, Cassius Martel, Tomio Nakamurakare, Victor Ortiz |
| Sprint 1 Review Summary          | Durante el Sprint 1, se cumplió exitosamente con la planificación establecida para la fase inicial del proyecto FitManager. Se diseñaron la experiencia de usuario (UX) y la interfaz de usuario (UI) de la plataforma, estableciendo así las bases visuales y funcionales del sistema. Asimismo, se definió la estructura principal basada en el Diseño Guiado por el Dominio (DDD), lo que permitirá una arquitectura escalable alineada con el dominio del gimnasio. También se establecieron las pautas de estilo para garantizar la coherencia visual y técnica a lo largo del proyecto. Finalmente, se desarrolló y desplegó la landing page responsiva, representando el primer entregable visible para el usuario final. |
| Sprint 1 Retrospective Summary   | El equipo valoró positivamente la colaboración y el compromiso durante el Sprint 1, destacando la claridad en la definición de roles y tareas, lo que permitió completar entregables clave como el diseño UX/UI, la definición de la arquitectura DDD y el desarrollo de la landing page. Sin embargo, se identificaron oportunidades de mejora en la gestión del tiempo y la comunicación diaria, especialmente en la sincronización entre diseño y desarrollo. Para los próximos sprints, se acordó implementar reuniones de seguimiento más breves pero más frecuentes, así como mantener la documentación actualizada para facilitar el trabajo colaborativo y reducir cuellos de botella. |
|      | **Sprint Goal & User Stories** |
| Sprint 2 Goal                    | Nuestro enfoque está en desarrollar el frontend para las secciones de gestión de miembros, personal, clases, inventario, notificaciones y finanzas del gimnasio, además de implementar soporte para accesibilidad e internacionalización en la aplicación web de FitManager. Creemos que esto proporcionará a los administradores y propietarios de gimnasios una primera versión funcional de la plataforma que les permita visualizar, registrar, editar y organizar eficientemente los recursos humanos, operativos y financieros del gimnasio desde una interfaz clara, accesible y multilingüe. Esto se confirmará cuando este segmento pueda navegar por las vistas desarrolladas en este sprint, interactuar con los elementos de gestión descritos y acceder a la plataforma usando lectores de pantalla o en su idioma preferido. |
| Sprint 2 Velocity                | 15 |
| Sum of Story Points              | 36 |

#### 5.2.2.2. Aspect Leaders and Collaborators

En esta sección se elaborará la Leadership-and-Collaboration Matrix (LACX), un artefacto que permite identificar claramente quién lidera (L) y quién colabora (C) en cada aspecto funcional del Sprint 2.

| Team Member (Last Name, First Name) | GitHub Username             | App   Layout Feature | Dashboard Feature | Calendar Feature | Personal Feature | Members Feature | Classes Feature | i18n Feature |
|-------------------------------------|------------------------------|----------------------|-------------------|------------------|------------------|------------------|------------------|--------------|
| Alarcón, Víctor Nicolás             | @Nico1234556                 |                      |                   |                  |                  |                  |                  |              |
| Nakamurakare Teruya, Alex Tomio     | @kistoo                      |                      | L                 | L                |                  |                  |                  | L            |
| Martel Andrade, Cassius Estefano    | @kcc12321                    |                      |                   | L                | L                | L                |                  |              |
| Luque Minaya, Renzo Andrés          | @renzoluquem                 | L                    |                   |                  |                  |                  |                  |              |
| Alvarado De La Cruz, Juan Carlos    | @JuanCarlosAlvarado900       |                      |                   |                  |                  |                  |                  | C            |

| Team Member (Last Name, First Name) | GitHub Username             | Inventory Feature | Finances Feature | Attendance Feature | Notifications Feature | Profile Feature | Login Feature |
|-------------------------------------|------------------------------|-------------------|------------------|---------------------|------------------------|------------------|----------------|
| Alarcón, Víctor Nicolás             | @Nico1234556                 |                   |                  |                     | L                      |                  | L              |
| Nakamurakare Teruya, Alex Tomio     | @kistoo                      |                   |                  |                     |                        | C                |                |
| Martel Andrade, Cassius Estefano    | @kcc12321                    | L                 |                  |                     |                        |                  |                |
| Luque Minaya, Renzo Andrés          | @renzoluquem                 |                   | L                | L                   |                        | C                |                |
| Alvarado De La Cruz, Juan Carlos    | @JuanCarlosAlvarado900       |                   |                  |                     |                        | L                |                |

#### 5.2.2.3 Sprint Backlog 2

El presente Sprint Backlog 2 detalla el conjunto de tareas y User Stories seleccionadas del Product Backlog que el equipo de FitManager se ha comprometido a completar durante esta iteración. El objetivo principal de este sprint es desarrollar el frontend de las secciones de gestión de miembros, personal, clases, inventario, notificaciones e ingresos del gimnasio, además de implementar el soporte para accesibilidad e internacionalización en la aplicación web FitManager.

| User Story ID | Task ID | Descripción                                              | Estimación (hrs) | Asignado a            | Estado  |
|---------------|---------|----------------------------------------------------------|------------------|------------------------|---------|
| US20          | T01     | Implementación de la tabla de clientes                  | 2                | Cassius Martel         | Done    |
|               | T02     | Conexión con el fake API                                 | 0.5              | Cassius Martel         | Done    |
|               | T03     | Implementación de lógica de creación de clientes         | 1                | Cassius Martel         | Done    |
|               | T04     | Implementación de lógica de edición de clientes          | 0.5              | Cassius Martel         | Done    |
|               | T05     | Implementación de lógica de borrar clientes              | 0.5              | Cassius Martel         | Done    |
|               | T06     | Implementación de filtros y búsqueda                     | 0.5              | Cassius Martel         | Done    |
|               | T07     | Desarrollo del componente de card de cliente             | 2                | Cassius Martel         | Done    |
|               | T08     | Refinamiento de diseño visual                            | 0.5              | Cassius Martel         | Done    |
| US06          | T09     | Desarrollo del componente de gráfico de ingresos         | 3                | Renzo Luque            | Done    |
|               | T10     | Desarrollo del componente de resumen financiero          | 1                | Renzo Luque            | Done    |
|               | T12     | Desarrollo del componente de la tabla de transacciones   | 2                | Renzo Luque            | Done    |
|               | T13     | Implementación de funcionalidad de filtrado              | 0.5              | Renzo Luque            | Done    |
|               | T14     | Implementación de la búsqueda global                     | 0.5              | Renzo Luque            | Done    |
|               | T15     | Conexión con fake API                                    | 0.5              | Renzo Luque            | Done    |
|               | T16     | Refinamiento del diseño visual                           | 0.5              | Renzo Luque            | Done    |
| US02          | T17     | Desarrollo del componente del calendario mensual         | 3                | Tomio Nakamurakare     | Done    |
|               | T18     | Lógica de navegación entre meses                         | 1                | Tomio Nakamurakare     | Done    |
|               | T19     | Componente de clases por día                             | 2                | Tomio Nakamurakare     | Done    |
|               | T20     | Conexión con fake API                                    | 0.5              | Tomio Nakamurakare     | Done    |
|               | T21     | Manejo del estado de fecha seleccionada                  | 0.5              | Tomio Nakamurakare     | Done    |
|               | T22     | Refinamiento del diseño visual                           | 0.5              | Tomio Nakamurakare     | Done    |
| US09          | T23     | Componente de HeatMap semanal                            | 3                | Renzo Luque            | Done    |
|               | T24     | Componente de resumen semanal                            | 1                | Renzo Luque            | Done    |
|               | T25     | Componente de resumen histórico                          | 0.5              | Renzo Luque            | Done    |
|               | T26     | Conexión con fake API                                    | 0.5              | Renzo Luque            | Done    |
|               | T27     | Refinamiento del diseño visual                           | 0.5              | Renzo Luque            | Done    |
| US10          | T28     | Listado de clases                                        | 1                | Cassius Martel         | Done    |
|               | T29     | Añadir clases                                            | 0.5              | Cassius Martel         | Done    |
|               | T30     | Editar clases                                            | 0.5              | Cassius Martel         | Done    |
|               | T31     | Eliminar clases                                          | 0.5              | Cassius Martel         | Done    |
|               | T32     | Conexión con fake API                                    | 0.5              | Cassius Martel         | Done    |
|               | T33     | Refinamiento visual                                      | 0.5              | Cassius Martel         | Done    |
| US11          | T34     | Tabla de personal                                        | 1                | Cassius Martel         | Done    |
|               | T35     | Conexión con fake API                                    | 0.5              | Cassius Martel         | Done    |
|               | T36     | Crear personal                                           | 0.5              | Cassius Martel         | Done    |
|               | T37     | Editar personal                                          | 0.5              | Cassius Martel         | Done    |
|               | T38     | Borrar personal                                          | 0.5              | Cassius Martel         | Done    |
|               | T39     | Filtros y búsqueda                                       | 0.5              | Cassius Martel         | Done    |
|               | T40     | Card de personal                                         | 2                | Cassius Martel         | Done    |
|               | T41     | Refinamiento visual                                      | 0.5              | Cassius Martel         | Done    |
| US12          | T42     | Notificaciones enviadas                                  | 2                | Victor Ortiz           | Done    |
|               | T43     | Notificaciones recibidas                                 | 2                | Victor Ortiz           | Done    |
|               | T44     | Crear notificación                                       | 2                | Victor Ortiz           | Done    |
|               | T45     | Conexión con fake API                                    | 1                | Victor Ortiz           | Done    |
|               | T46     | Refinamiento visual                                      | 0.5              | Victor Ortiz           | Done    |
| US17          | T47     | Listado de inventario                                    | 1                | Cassius Martel         | Done    |
|               | T48     | Añadir ítems                                             | 1                | Cassius Martel         | Done    |
|               | T49     | Editar ítems                                             | 0.5              | Cassius Martel         | Done    |
|               | T50     | Eliminar ítems                                           | 0.5              | Cassius Martel         | Done    |
|               | T51     | Conexión con fake API                                    | 0.5              | Cassius Martel         | Done    |
|               | T52     | Refinamiento visual                                      | 0.5              | Cassius Martel         | Done    |
| US18          | T53     | Cambio de idioma                                         | 3                | Juan Alvarado          | Done    |
|               | T54     | Lógica en labels de la app                               | 3                | Juan Alvarado          | Done    |
| US19          | T55     | Etiquetas aria                                           | 3                | Juan Alvarado          | Done    |
| US21          | T56     | Gráfico de asistencia                                    | 3                | Tomio Nakamurakare     | Done    |
|               | T57     | Componentes de métricas                                  | 1                | Tomio Nakamurakare     | Done    |
|               | T58     | Conexión con fake API                                    | 0.5              | Tomio Nakamurakare     | Done    |
|               | T59     | Refinamiento visual                                      | 0.5              | Tomio Nakamurakare     | Done    |

Historias de usuario a desarrollar en este Sprint
<p align="center">
  <img src="https://github.com/user-attachments/assets/5ae34378-2b9b-43a5-9db9-1564704b0ee5" alt="Historias de usuario para este sprint">
</p>

Ejemplo de tareas y descripción de una historia
<p align="center">
  <img src="https://github.com/user-attachments/assets/175f5afa-f2d9-4ada-8e76-c44a8a5c79d1" alt="Tareas y descripción de una historia">
</p>

#### 5.2.2.4. Development Evidence for Sprint Review

## Members

| Repository   | Branch          | Commit Id | Commit message                          | Committed on (Date) |
|--------------|-----------------|-----------|-----------------------------------------|---------------------|
| FitManager   | feature/members | 699fb19   | Add initial project structure           | May 7, 2025         |
| FitManager   | feature/members | b1cb0c9   | Add calendar directory                  | May 7, 2025         |
| FitManager   | feature/members | 7c07d01   | Modified main.js                        | May 7, 2025         |
| FitManager   | feature/members | f6d2188   | Add members screen                      | May 9, 2025         |
| FitManager   | feature/members | 7bda199   | fix(member): change height to 100% for better layout responsiveness | May 9, 2025 |

## Employees

| Repository   | Branch          | Commit Id | Commit message                          | Committed on (Date) |
|--------------|-----------------|-----------|-----------------------------------------|---------------------|
| FitManager   | feature/employees| 2d0d8e8   | Remove accident                         | May 9, 2025         |
| FitManager   | feature/employees| 7c02f9f   | Add employee screen                     | May 9, 2025         |
| FitManager   | feature/employees| cce63dc   | Merge branch 'feature/employees' into develop | May 9, 2025 |

## Classes

| Repository   | Branch          | Commit Id | Commit message                          | Committed on (Date) |
|--------------|-----------------|-----------|-----------------------------------------|---------------------|
| FitManager   | feature/classes | f5fdc35   | Add class.entity                        | May 9, 2025         |
| FitManager   | feature/classes | 8f9f891   | Add class list                          | May 9, 2025         |
| FitManager   | feature/classes | 5aef9a7   | Add trainer column                      | May 9, 2025         |
| FitManager   | feature/classes | b89d352   | Add add-class.component                 | May 9, 2025         |
| FitManager   | feature/classes | 6a26932   | Add edit-class.component                | May 10, 2025        |
| FitManager   | feature/classes | 70cf17d   | Add delete-class.component              | May 10, 2025        |
| FitManager   | feature/classes | 7e549cf   | Add view-members.component              | May 10, 2025        |
| FitManager   | feature/classes | 5e8c6f3   | Add more gym classes                    | May 10, 2025        |
| FitManager   | feature/classes | 59939f5   | Delete max-width property               | May 10, 2025        |
| FitManager   | feature/classes | d721af5   | Merge branch 'feature/employees' into develop | May 10, 2025        |

## Dashboard

| Repository   | Branch          | Commit Id | Commit message                                                      | Committed on (Date) |
|--------------|-----------------|-----------|---------------------------------------------------------------------|---------------------|
| FitManager   | feature/dashboard| 033799d   | feat(assets): add svg for dashboard items                            | May 9, 2025         |
| FitManager   | feature/dashboard| f4cf77c   | Add data entity                                                      | May 9, 2025         |
| FitManager   | feature/dashboard| 61e43e4   | Add data assembler                                                   | May 9, 2025         |
| FitManager   | feature/dashboard| 814ff10   | Add dashboard section                                                | May 9, 2025         |
| FitManager   | feature/dashboard| d6551ca   | Merge branch 'feat/dashboard' into develop                           | May 9, 2025         |
| FitManager   | feature/dashboard| d97847a   | fix(data-item): changed title color based on mockup prototype and adjust its size for readability | May 10, 2025 |
| FitManager   | feature/dashboard| a156352   | Fix main.js                                                          | May 9, 2025         |
| FitManager   | feature/dashboard| f3ba7c8   | Update dashboard endpoint                                            | May 9, 2025         |
| FitManager   | feature/dashboard| 3e0d03b   | Refactor layout structure                                            | May 9, 2025         |

## Calendar

| Repository   | Branch          | Commit Id | Commit message                                                      | Committed on (Date) |
|--------------|-----------------|-----------|---------------------------------------------------------------------|---------------------|
| FitManager   | feature/calendar| a156352   | Fix main.js                                                          | May 10, 2025        |
| FitManager   | feature/calendar| 728f310   | Add calendar component                                               | May 10, 2025        |
| FitManager   | feature/calendar| 9d4b44d   | Merge branch 'feature/calendar' into develop                         | May 10, 2025        |

## Attendance

| Repository   | Branch          | Commit Id | Commit message                                                      | Committed on (Date) |
|--------------|-----------------|-----------|---------------------------------------------------------------------|---------------------|
| FitManager   | feature/attendance| 0a7d85f  | feat(attendance): integrate heatmap and summary components into attendance layout | May 11, 2025 |
| FitManager   | feature/attendance| ae66044  | feat(heatmap): update component name and enhance styling with container layout | May 11, 2025 |
| FitManager   | feature/attendance| a932531  | feat(historical-summary): rename component and enhance styling with container layout | May 11, 2025 |
| FitManager   | feature/attendance| 9aa004f  | feat(weekly-summary): rename component and add container layout with styling enhancements | May 11, 2025 |
| FitManager   | feature/attendance| 31b47b3  | feat(db): update db adding attendance                               | May 11, 2025        |
| FitManager   | feature/attendance| 28fd118  | feat(week): add WeeklyAttendance class to manage weekly attendance data | May 11, 2025 |
| FitManager   | feature/attendance| 9b1ef1d  | feat(week-api): implement WeekApiService and WeekAssembler for fetching and processing weekly attendance data | May 11, 2025 |
| FitManager   | feature/attendance| 163e5bf  | feat(week-assembler): add WeekAssembler class for transforming attendance data from resources and responses | May 11, 2025 |
| FitManager   | feature/attendance| 86478bf  | feat(heatmap): enhance heat map component with data fetching, formatting, and improved UI | May 11, 2025 |
| FitManager   | feature/attendance| 50adc0a  | fix(week-api): update API endpoint and improve error handling for weekly attendance data | May 11, 2025 |
| FitManager   | feature/attendance| 27e75a7  | fix(week-assembler): handle null resource input and update property names for weekly attendance | May 11, 2025 |
| FitManager   | feature/attendance| 6909afb  | style(heatmap): adjust box-shadow for improved visual appearance    | May 11, 2025        |
| FitManager   | feature/attendance| ef54e85  | feat(historical-summary): implement data fetching and enhance UI for historical summary component | May 11, 2025 |
| FitManager   | feature/attendance| 64a81e7  | feat(weekly-summary): implement data fetching and loading states for weekly summary component | May 11, 2025 |
| FitManager   | feature/attendance| abf56ee  | feat(summary): add Summary class to encapsulate weekly and historical attendance data | May 11, 2025 |
| FitManager   | feature/attendance| 7890a29  | feat(summary-api): implement SummaryApiService for fetching and processing attendance summary data | May 11, 2025 |
| FitManager   | feature/attendance| 8be626f  | feat(summary-assembler): add SummaryAssembler class for transforming summary resources into entities | May 11, 2025 |
| FitManager   | feature/attendance| 3570c80  | feat(attendance): add flexbox layout for attendance component to improve UI structure | May 11, 2025 |
| FitManager   | feature/attendance| b791ce9  | style(heatmap): remove margin from heatmap component for better alignment | May 11, 2025 |
| FitManager   | feature/attendance| 8dd1d28  | feat(weekly-summary): centered component. | May 11, 2025 |
| FitManager   | feature/attendance| 975e3f4  | Merge branch 'feat/attendance' into develop                         | May 11, 2025        |

## App Layout

| Repository   | Branch          | Commit Id | Commit message                                                      | Committed on (Date) |
|--------------|-----------------|-----------|---------------------------------------------------------------------|---------------------|
| FitManager   | feature/app-layout | d9e68ac  | feat(assets): add svg for menu items                                | May 8, 2025         |
| FitManager   | feature/app-layout | b3cbc70  | feat(calendar): add initial calendar component                       | May 8, 2025         |
| FitManager   | feature/app-layout | 748cc86  | feat(layout): integrate app layout component into main app         | May 8, 2025         |
| FitManager   | feature/app-layout | 987e07b  | feat(router): set up Vue router with initial routes                 | May 8, 2025         |
| FitManager   | feature/app-layout | 4968c6b  | feat(style): update body and app styles for full-width layout       | May 8, 2025         |
| FitManager   | feature/app-layout | b889fac  | feat(index): update title and add Google Fonts for improved typography | May 8, 2025     |
| FitManager   | feature/app-layout | 53b248a  | feat(sidebar): add sidebar component with navigation menu           | May 8, 2025         |
| FitManager   | feature/app-layout | 95af015  | feat(toolbar): add toolbar component with search and profile options (still TODO) | May 8, 2025 |
| FitManager   | feature/app-layout | 4896600  | feat(components): add new components for attendance, classes, dashboard, bookings, employees, finances, members, and notifications | May 8, 2025 |
| FitManager   | feature/app-layout | dd79438  | feat(main): integrate router and PrimeVue for enhanced functionality | May 8, 2025        |
| FitManager   | feature/app-layout | 5d02d12  | feat(layout): create app layout component with sidebar, toolbar and content integration | May 8, 2025 |
| FitManager   | feature/app-layout | fc9a2e4  | chore: add logo-app png for sidebar.                                | May 8, 2025         |
| FitManager   | feature/app-layout | e3dc67c  | feat(sidebar): add link routes to menu items (SPA)                  | May 8, 2025         |
| FitManager   | feature/app-layout | abc41c2  | chore: update con .svg files                                         | May 8, 2025         |
| FitManager   | feature/app-layout | 2bf9dd5  | feat(sidebar): replace logo image with SVG and adjust padding in sidebar navigation | May 8, 2025 |
| FitManager   | feature/app-layout | b47b777  | feat(svg): add new SVG for brand logo                               | May 8, 2025         |
| FitManager   | feature/app-layout | 2f899e1  | feat(sidebar): enhance menu styles for improved aesthetics and hover effect (still to work) | May 8, 2025 |
| FitManager   | feature/app-layout | 601774b  | feat(style): update color scheme and background for improved readability | May 8, 2025 |
| FitManager   | feature/app-layout | f71c40f  | feat(theme): integrate Aura theme with PrimeVue for enhanced styling options | May 8, 2025 |
| FitManager   | feature/app-layout | 3b860ad  | feat(toolbar): enhance toolbar layout with search input and profile section | May 8, 2025 |
| FitManager   | feature/app-layout | 9de832f  | feat(sidebar): enhance menu item interaction with active state and hover effects | May 8, 2025 |
| FitManager   | feature/app-layout | 6f741ec  | feat(sidebar): reduce line separator height for improved visual clarity | May 8, 2025 |
| FitManager   | app-layout       | cfe15b2   | feat(toolbar): improve search input styling and update profile button layout | May 8, 2025 |
| FitManager   | feature/app-layout | 9778105  | feat(toolbar): replace card for div, removed redundancies from styles | May 8, 2025         |
| FitManager   | feature/app-layout | f11b1ba  | chore: update.                                                      | May 8, 2025         |
| FitManager   | feature/app-layout | f533919  | feat(profile): refactor components and set up script for gym profile, info, and settings | May 8, 2025 |
| FitManager   | feature/app-layout | 1c75155  | feat(router): add profile route to the application                  | May 8, 2025         |
| FitManager   | feature/app-layout | 465b207  | feat(router): add profile route to the application                  | May 8, 2025         |
| FitManager   | feature/app-layout | dfd2021  | feat(sidebar): update font weight and link colors for improved visibility | May 8, 2025 |
| FitManager   | feature/app-layout | 0d84dbc  | Merge branch 'feat/app-layout' of https://github.com/FitFlow-AppWeb/FitManager into develop | May 9, 2025 |

## Finances

| Repository   | Branch          | Commit Id | Commit message                                                      | Committed on (Date) |
|--------------|-----------------|-----------|---------------------------------------------------------------------|---------------------|
| FitManager   | feature/finances | d2f3c84   | feat(db-finances): add initial subscription income data for 2024-2025 | May 9, 2025         |
| FitManager   | feature/finances | 895788d   | feat(finances): restructure finances layout with new components for improved organization | May 9, 2025 |
| FitManager   | feature/finances | f61cf73   | feat(finances): add card layout to finances info component for better presentation | May 9, 2025 |
| FitManager   | feature/finances | 5e3b98d   | feat(graphic): add card layout and styling for improved data presentation | May 9, 2025 |
| FitManager   | feature/finances | 8c9bea0   | refactor(transactions): remove unused component names and add card layout to transaction list | May 9, 2025 |
| FitManager   | feature/finances | edacc1b   | feat(graphic): add graphic component and creating linear graph from API | May 9, 2025         |
| FitManager   | feature/finances | a13af41   | style(sidebar): update text color for improved visibility           | May 9, 2025         |
| FitManager   | feature/finances | dd7d992   | fix(finances): update field names                                   | May 9, 2025         |
| FitManager   | feature/finances | 114f797   | feat(finances): enhance FinancesInfo component with card layout and divider | May 9, 2025 |
| FitManager   | feature/finances | b464401   | feat(main): add Divider component from PrimeVue for improved layout | May 9, 2025         |
| FitManager   | feature/finances | 2ab136d   | feat(finances): add GeneralInfo and IncomeData entities for financial data management | May 10, 2025 |
| FitManager   | feature/finances | ff2e6c3   | chore: deleted db                                                   | May 10, 2025        |
| FitManager   | feature/finances | 4045825   | feat(db): add finances database in API                               | May 10, 2025        |
| FitManager   | feature/finances | 3ad9222   | feat(finances): update layout styles for improved spacing in finances component | May 10, 2025 |
| FitManager   | feature/finances | 7065830   | feat(finances): implement GeneralInfoComponent for displaying financial data | May 10, 2025 |
| FitManager   | feature/finances | 38ffcb0   | feat(finances): add general-info assembler for transforming financial data resources | May 10, 2025 |
| FitManager   | feature/finances | 0041688   | feat(finances): add GeneralInfoApiService for fetching financial data | May 10, 2025 |
| FitManager   | feature/finances | bbdd3bc   | feat(finances): implement IncomeChartComponent for visualizing income data | May 10, 2025 |
| FitManager   | feature/finances | 83a94d3   | feat(finances): add IncomeAssembler for transforming income data resources | May 10, 2025 |
| FitManager   | feature/finances | 5372a97   | feat(finances): add IncomeApiService for fetching income data       | May 10, 2025         |
| FitManager   | feature/finances | a01bda2   | feat(transaction): add transaction assembler.                       | May 10, 2025         |
| FitManager   | feature/finances | a9d01a4   | feat(transaction): add transaction entity.                          | May 10, 2025         |
| FitManager   | feature/finances | 5414861   | feat(transaction): implement transaction API service for fetching transactions | May 10, 2025 |
| FitManager   | feature/finances | 38321c2   | feat(transaction): implement transaction list component with filtering and loading states | May 9, 2025 |
| FitManager   | feature/finances | 563c9c9   | Merge branch 'feat/finances' into develop                           | May 10, 2025        |

## Inventory

| Repository   | Branch          | Commit Id | Commit message                                                      | Committed on (Date) |
|--------------|-----------------|-----------|---------------------------------------------------------------------|---------------------|
| FitManager   | feature/inventory | 806dafa  | Add inventory.entity.js                                             | May 10, 2025        |
| FitManager   | feature/inventory | e78796f  | Add inventory.assembler.js.js                                        | May 10, 2025        |
| FitManager   | feature/inventory | b70b562  | Add inventory-api.service.js                                         | May 10, 2025        |
| FitManager   | feature/inventory | b3914b8  | Add inventory-list                                                   | May 10, 2025        |
| FitManager   | feature/inventory | 89cf4bf  | Add edit inventory feature                                           | May 10, 2025        |
| FitManager   | feature/inventory | 6590902  | Add delete inventory feature                                         | May 10, 2025        |
| FitManager   | feature/inventory | a8628f4  | Merge branch 'feature/inventory' into develop                        | May 10, 2025        |

## Profile

| Repository   | Branch         | Commit Id | Commit message                                           | Committed on (Date) |
|--------------|----------------|-----------|----------------------------------------------------------|---------------------|
| FitManager   | feature/profile | 148b314   | Initial commit                                            | May 9, 2025         |
| FitManager   | feature/profile | 8595ab1   | add users to db.json                                      | May 9, 2025         |
| FitManager   | feature/profile | 5236187   | chore: add logo-profile.png and gimnasio-profile.png      | May 9, 2025         |
| FitManager   | feature/profile | 37e9e83   | add profile screen                                        | May 10, 2025        |
| FitManager   | feature/profile | ef0caa8   | Profile fake api                                          | May 10, 2025        |
| FitManager   | feature/profile | f671fb8   | add i18n implementation on profile                        | May 11, 2025        |
| FitManager   | feature/profile | 5c6ee29   | Fix user and i18n                                          | May 12, 2025        |

## Internationalization

| Repository   | Branch                  | Commit Id | Commit message                                           | Committed on (Date) |
|--------------|-------------------------|-----------|----------------------------------------------------------|---------------------|
| FitManager   | feature/internacionalization | 2c16899   | Implement i18n for dashboard section                      | May 12, 2025        |
| FitManager   | feature/internacionalization | 8e09168   | Adjust key naming in i18n                                 | May 12, 2025        |
| FitManager   | feature/internacionalization | 2f30f9e   | Implement i18n for calendar section                       | May 12, 2025        |
| FitManager   | feature/internacionalization | 33151b7   | Add definitions for employees section                     | May 12, 2025        |

## Notifications

| Repository   | Branch         | Commit Id | Commit message                                           | Committed on (Date) |
|--------------|----------------|-----------|----------------------------------------------------------|---------------------|
| FitManager   | feature/notification | 5de501eb74ceedabbb7f75c3b3d02f807c3ed96a | Add login                                            | May 13, 2025        |
| FitManager   | feature/notification | 5de501eb74ceedabbb7f75c3b3d02f807c3ed96a | Finish notification and login                          | May 13, 2025        |

#### 5.2.2.5. Execution Evidence for Sprint Review.

En el Sprint 2 hemos logrado implementar y visualizar las siguientes funcionalidades clave para nuestra aplicación web **FitManager**. A continuación, se presenta la evidencia de ejecución de estas funcionalidades implementadas:

### Layout General de la Aplicación (App-Layout)

Se ha integrado el layout general de la aplicación con las siguientes características:

- **Barra de Navegación Superior (Toolbar)**: La barra de navegación contiene:
  - El **logotipo de la aplicación**.
  - Una **barra de búsqueda global** para facilitar la búsqueda dentro de la aplicación.
  - El acceso al **perfil del usuario**.
  
 <p align="center">
  <img src="https://github.com/user-attachments/assets/96d1d7e8-b38d-4531-be72-b7850c39ca52" alt="Toolbar">
</p>

El **Menú Lateral** ofrece acceso directo a todas las secciones principales de gestión de la plataforma, incluyendo:

- **Dashboard**
- **Miembros**
- **Personal**
- **Clases**
- **Calendario**
- **Asistencia**
- **Finanzas**
- **Inventario**
- **Notificaciones**

<p align="center">
  <img src="https://github.com/user-attachments/assets/b51e12b5-532a-4b93-9a81-88030f4626fb" alt="sidebar">
</p>

El **Área de Contenido Principal** es el espacio donde se cargarán las diferentes vistas y funcionalidades de cada sección seleccionada. Dependiendo de la opción seleccionada en el menú lateral, este área se actualizará dinámicamente para mostrar los detalles y las interacciones específicas relacionadas con la sección activa.

<p align="center">
  <img src="https://github.com/user-attachments/assets/a95570c9-c0ec-4981-9064-6fb302cc917d" alt="area de contenido principal">
</p>

### Dashboard

El **Dashboard** ofrece una vista general y rápida del estado y las actividades clave del gimnasio:

- **Métricas**: Presenta tarjetas con métricas importantes como total de miembros, miembros activos, e ingresos recientes.
- **Gráfico de Asistencias**: Incluye un gráfico de asistencia del día y un listado de las clases programadas para la jornada actual.

<p align="center">
  <img src="https://github.com/user-attachments/assets/904395f2-2e0e-4f8e-829d-9f708d31b5b2" alt="dashboard">
</p>

### Calendar

El **Calendar** es una herramienta visual para la programación y consulta de actividades:

- **Vista Mensual**: Presenta un calendario mensual donde se pueden identificar las clases programadas.
- **Detalle por Día**: Al seleccionar un día, se muestran las clases y eventos específicos de esa fecha.

<p align="center">
  <img src="https://github.com/user-attachments/assets/05e8ca92-c3f0-4fa4-b7a2-3e3691988995" alt="calendar">
</p>

### Personal

La funcionalidad **Personal** permite administrar al equipo de trabajo del gimnasio:

- **Listado de Personal**: Una tabla que muestra los empleados (entrenadores, recepcionistas, etc.), sus roles y datos de contacto. Incluye opciones de búsqueda para facilitar la navegación.
- **Creación y Edición de Personal**: Interfaces que permiten agregar nuevos empleados y actualizar sus perfiles existentes.

<p align="center">
  <img src="https://github.com/user-attachments/assets/65a3518e-674d-4f31-b139-009b0eee11cd" alt="personal">
</p>

### Members

La sección **Members** permite la administración integral de los clientes del gimnasio:

- **Listado de Miembros**: Se visualiza una tabla con los miembros registrados, mostrando información relevante como nombre, estado de membresía, etc. Incluye funcionalidades de búsqueda y filtros para facilitar la navegación.
- **Creación y Edición de Miembros**: Formularios dedicados para registrar nuevos miembros y modificar la información de los existentes.
- **Vista de Detalle del Miembro**: Al seleccionar un miembro, se muestra una tarjeta o panel con su información completa y opciones de gestión.

<p align="center">
  <img src="https://github.com/user-attachments/assets/6f22d171-5f83-43cc-a6e6-292dd2fff767" alt="members">
</p>

### Classes

La sección **Classes** permite la organización y administración de las clases ofrecidas en el gimnasio:

- **Listado de Clases**: Visualización de todas las clases con detalles como nombre, entrenador, horario, cupos disponibles e inscritos.
- **Gestión de Clases**: Funcionalidades para añadir nuevas clases, editar las existentes y eliminarlas.
- **Vista de Detalle de Clase**: Muestra información ampliada de una clase específica, incluyendo la lista de participantes.

<p align="center">
  <img src="https://github.com/user-attachments/assets/de32445e-cdf7-4914-9500-a34ccca1a363" alt="classes">
</p>

### Inventory

La sección **Inventory** proporciona la funcionalidad para administrar los recursos y equipos del gimnasio:

- **Listado de Inventario**: Tabla que muestra los ítems del inventario, su cantidad disponible y estado.
- **Gestión de Ítems**: Formularios para agregar, editar y eliminar ítems del inventario.

<p align="center">
  <img src="https://github.com/user-attachments/assets/df224d1b-36c2-4d5a-af0a-49718f241c63" alt="inventory">
</p>

### Finances

La sección **Finances** permite realizar un seguimiento de los movimientos económicos del gimnasio:

- **Gráfico de Ingresos**: Representación visual de la evolución de los ingresos a lo largo del tiempo.
- **Tabla de Transacciones**: Listado detallado de los pagos y otros movimientos financieros realizados.
- **Resumen Financiero**: Información consolidada sobre el estado financiero general del gimnasio.

<p align="center">
  <img src="https://github.com/user-attachments/assets/11377a39-34d9-48da-a904-109cc82739bb" alt="finances">
</p>

### Attendance

El módulo **Attendance** permite el seguimiento de la concurrencia al gimnasio:

- **Mapa de Calor Semanal (Heatmap)**: Visualización gráfica de los horarios con mayor y menor afluencia durante la semana.
- **Resúmenes de Asistencia**: Paneles con estadísticas de asistencia tanto a nivel semanal como histórica.

<p align="center">
  <img src="https://github.com/user-attachments/assets/14f98e95-d676-4ad5-92bc-8fc5f07f35de" alt="attendance">
</p>

### Notifications

El sistema de **Notifications** facilita la comunicación de avisos importantes dentro de la plataforma y hacia los usuarios:

- **Bandeja de Notificaciones Recibidas/Enviadas**: Interfaz que muestra un listado de las notificaciones, permitiendo ver su estado.

<p align="center">
  <img src="https://github.com/user-attachments/assets/4a954af6-c72e-4f54-bdd3-43d960d680c9" alt="notifications">
</p>

### Perfil

Esta sección permite a los usuarios (administradores del gimnasio) gestionar la información de su cuenta y las configuraciones generales de la aplicación FitManager:

- **Visualización de Información del Perfil**: Muestra los datos asociados a la cuenta del gimnasio o del usuario administrador, como nombre del gimnasio, datos de contacto principales y rol del usuario.
- **Edición de Información del Perfil**: Interfaz para modificar los detalles de la cuenta, como el nombre del gimnasio, dirección, información de contacto y, posiblemente, cargar o cambiar el logo del gimnasio.

<p align="center">
  <img src="https://github.com/user-attachments/assets/82f01528-51c0-434b-a7ce-e8b245f900c2" alt="profile">
</p>

### Login

Permite a los administradores acceder a la plataforma FitManager mediante credenciales o autenticación social:

- **Autenticación de usuarios existentes**: Los administradores pueden ingresar al sistema utilizando su **email** y **contraseña**.

<p align="center">
  <img src="https://github.com/user-attachments/assets/1f49aac5-d9ef-4bf0-b5f7-8db362e4e7e7" alt="profile">
</p>

#### 5.2.2.6. Services Documentation Evidence for Sprint Review

Durante el Sprint 2, el desarrollo del frontend de FitManager para las funcionalidades de gestión de miembros, finanzas, empleados, clases, dashboard, asistencia, usuarios (perfil) e inventario se realizó utilizando una API simulada (`fake API`). 

Esta API fue servida localmente mediante json-server, utilizando el archivo `db.json` como fuente de datos. Este enfoque permitió que el equipo de frontend avanzara de manera paralela y desacoplada del desarrollo completo del backend, facilitando la implementación temprana de vistas, interacción y validación de funcionalidades clave.
  
> La documentación formal con OpenAPI (Swagger) de los servicios web RESTful definitivos y su implementación en el backend real están planificadas para sprints posteriores.  
> La estructura de datos reflejada en `db.json` y los endpoints simulados servirán como referencia base para el diseño y desarrollo de los servicios reales.

| Endpoint                            | Entidad Principal        | Operaciones Simuladas (JSON Server)             | Alcance Futuro con OpenAPI |
|-------------------------------------|---------------------------|--------------------------------------------------|-----------------------------|
| `http://localhost:3000/member`      | Miembros (Members)        | `GET`, `POST`, `PUT`, `DELETE` (por ID)         | Métodos detallados para listar, obtener por ID, crear, actualizar y eliminar miembros. |
| `http://localhost:3000/finances`    | Finanzas (Finances)       | `GET` (para `subscription_income`, `transaction_history`) | Consultas de ingresos, historial de transacciones y resumen financiero. |
| `http://localhost:3000/employees`   | Empleados (Employees)     | `GET`, `POST`, `PUT`, `DELETE` (por ID)         | Gestión completa del personal. |
| `http://localhost:3000/classes`     | Clases (Classes)          | `GET`, `POST`, `PUT`, `DELETE` (por ID)         | Gestión de clases, horarios, entrenadores e inscripciones. |
| `http://localhost:3000/dashboard`   | Dashboard (Estadísticas)  | `GET` (para `statistics`, `todayAttendance`, `todayClasses`) | Consulta de métricas y datos consolidados del panel principal. |
| `http://localhost:3000/attendance`  | Asistencia (Attendance)   | `GET` (para `weekly_heatmap`, `weekly_overview`, `historical_summary`) | Datos de asistencia, mapas de calor y resúmenes semanales/históricos. |
| `http://localhost:3000/users`       | Usuarios / Perfil         | `GET`, `PUT` (por ID)                           | Gestión del perfil del usuario/gimnasio. |
| `http://localhost:3000/inventory`   | Inventario (Inventory)    | `GET`, `POST`, `PUT`, `DELETE` (por ID)         | Gestión de ítems del inventario. |
| `http://localhost:3000/receivednotification` | Notificaciones Recibidas | `GET`                                            | Consulta de notificaciones recibidas. |
| `http://localhost:3000/inventory/sentnotification` | Notificaciones Enviadas  | `GET`                                            | Consulta de notificaciones enviadas. |
| `http://localhost:3000/admin`       | Login (Administradores)   | `GET`                                            | Consulta de credenciales de acceso. |

## Interacción con la Documentación OpenAPI (Simulada)

Las interacciones con la API simulada se realizaron directamente a través de solicitudes HTTP desde el código fuente del frontend (utilizando axios) basándose en la estructura del archivo db.json y las rutas visibles en el tablero.

A continuación, se detalla un ejemplo de cómo el frontend de FitManager interactúa con el endpoint simulado /attendance para obtener los datos de resumen de asistencia, utilizando el servicio SummaryApiService:

- La imagen a continuación muestra el resultado de acceder directamente al endpoint http://localhost:3000/attendance a través de un navegador web mientras json-server está sirviendo el archivo db.json. Se puede observar la estructura JSON completa devuelta para la clave "attendance", incluyendo weekly_heatmap, weekly_overview, y historical_summary, que son los datos que el SummaryApiService procesa:

<p align="center">
  <img src="https://github.com/user-attachments/assets/8480a2be-0d78-49fe-a29e-e1919a066c94" alt="endpoints result">
</p>

### Acción: Obtener los datos de resumen de asistencia (incluyendo el resumen semanal y el histórico)

- **Servicio Frontend Involucrado**: `SummaryApiService` (definido en `summary-api.service.js`)
- **Método del Servicio**: `getSummary()`
- **Verbo HTTP** (simulado por json-server para la solicitud `axios.get`): `GET`
- **Sintaxis de Llamada** (URL utilizada por axios): `http://localhost:3000/attendance`

`SummaryApiService` realiza una solicitud `GET` a `http://localhost:3000/attendance`.

<p align="center">
  <img src="https://github.com/user-attachments/assets/a7da4ac2-553c-44b1-8d15-b8e45f5c1bde" alt="attendance api service">
</p>

La respuesta esperada de json-server (basada en db.json bajo la clave "attendance") contiene los objetos `weekly_overview` y `historical_summary`.

El servicio extrae `response.data.weekly_overview` y `response.data.historical_summary`.

Estos datos "resource" se pasan a `SummaryAssembler.toEntityFromResource()` (definido en `summary.assembler.js`).

El `SummaryAssembler` instancia un objeto `Summary` (definido en `summary.entity.js`) con los datos transformados.

El objeto `Summary` resultante es devuelto por el método `getSummary()`, listo para ser utilizado por los componentes de la UI en el frontend.

La documentación de servicios en Sprint 2 se centró en la API simulada (`json-server`, `db.json`) usada para el desarrollo frontend de FitManager. Aunque no se generó documentación OpenAPI formal, esta API simulada y su consumo (ej. `SummaryApiService`) establecen un contrato inicial para los servicios RESTful reales que se documentará un sprint futuro.

#### 5.2.2.7. Software Deployment Evidence for Sprint Review

Para el despliegue de la aplicación utilizamos Firebase. Como parte del proceso, migramos nuestra API falsa (fake API) a Render, una plataforma que facilita la publicación de servicios backend simulados como json-server.

Para ello, primero subimos nuestro archivo db.json a un repositorio de github, con la configuración necesaria para que se despliegue correctamente en Render.

<p align="center">
  <img src="https://github.com/user-attachments/assets/544f8cfb-f6e9-4a41-a96b-8febf12c9b03" alt="repositorio para fakeapi">
</p>

Luego, en Render, creamos un Web Service y conectamos el repositorio previamente creado en GitHub. Seleccionamos una instancia del tipo gratuito (Free instance) y finalizamos la configuración para desplegar la API falsa.

<p align="center">
  <img src="https://github.com/user-attachments/assets/28ffad52-e4f6-416d-a7e2-440cbcc2db3f" alt="creating web service in render">
</p>

Después de ello, esperamos a que el servicio termine de desplegarse hasta que Render lo marque como listo (Live), indicando que la API ya está disponible públicamente.

<p align="center">
  <img src="https://github.com/user-attachments/assets/ce795e98-7fa2-4cf2-aad8-bba0510d53ac" alt="web service deployed in render">
</p>

Se puede verificar el correcto despliegue accediendo al enlace proporcionado por Render, donde estarán disponibles todos los endpoints de la API. Una vez confirmada su funcionalidad, procedimos a reemplazar en nuestro proyecto las URLs locales de la fake API por el nuevo enlace público.

<p align="center">
  <img src="https://github.com/user-attachments/assets/5300ae14-c5cf-428a-923c-7219c14c5b49" alt="fake api in json server">
</p>

Una vez que el proyecto está listo, procedemos a instalar las herramientas necesarias para utilizar Firebase desde la consola. Para ello, instalamos la Firebase CLI mediante el siguiente comando.

<p align="center">
  <img src="https://github.com/user-attachments/assets/7e3addba-b4d9-466f-943d-8200aa426d98" alt="fake api in json server">
</p>

Luego, iniciamos sesión con nuestra cuenta de Firebase utilizando el comando 'firebase login', el cual abrirá una ventana en el navegador para autenticarnos. Una vez que el inicio de sesión sea exitoso, procedemos a generar la versión optimizada del proyecto.

<p align="center">
  <img src="https://github.com/user-attachments/assets/baf637db-03f7-4bde-aff3-660d4812660c" alt="npm run build">
</p>

A continuación, iniciamos el proceso de configuración del hosting con el comando 'firebase init hosting'. Durante este proceso, Firebase nos pedirá una confirmación para inicializar el hosting en el repositorio actual, a lo cual responderemos afirmativamente. Luego, seleccionamos la opción de "usar un proyecto existente", ya que previamente hemos creado nuestro proyecto en la consola de Firebase. En la configuración que aparece a continuación, especificamos la carpeta dist como directorio público y respondemos "No" al resto de las opciones, como configurar la aplicación como una Single Page Application o sobrescribir archivos existentes.

<p align="center">
  <img src="https://github.com/user-attachments/assets/e43dd7ad-9977-4393-8d20-76a92fc8ab74" alt="firebase init hosting">
</p>

Finalmente, realizamos el despliegue con el comando correspondiente y así tendremos nuestra aplicación desplegada exitosamente.

<p align="center">
  <img src="https://github.com/user-attachments/assets/97a83b32-03f4-4052-9626-1278085fffad" alt="firebase deploy">
</p>

#### 5.2.2.8. Team Collaboration Insights during Sprint

Durante el Sprint 2, el equipo FitManager continuó aplicando la metodología ágil Scrum y las herramientas de colaboración definidas para avanzar en el desarrollo del frontend de la aplicación web. Este sprint se caracterizó por un esfuerzo coordinado en la implementación de múltiples funcionalidades clave. La comunicación se mantuvo principalmente a través de nuestro grupo de Whatsapp y Discord, realizando reuniones entre días que tuviéramos libres, y la gestión de tareas se centralizó en Pivotal Tracker.
Planificación del Sprint:

<p align="center">
  <img src="https://github.com/user-attachments/assets/e9a68a95-5f97-435a-9173-f74c53f07512" alt="pivotal tracker">
</p>

Uso de Herramientas de Colaboración (GitHub): 

<p align="center">
  <img src="https://github.com/user-attachments/assets/a02e72df-e7c4-4cd0-a65c-9d5cdeed68d5" alt="herramientas de colaboración">
</p>

Evidencia de las ramas

<p align="center">
  <img src="https://github.com/user-attachments/assets/47e5917f-45d6-47f0-8b28-38ef2bfe9770" alt="ramas del repositorio">
</p>

Evidencia de commits por integrante del grupo

<p align="center">
  <img src="https://github.com/user-attachments/assets/6cc77c8e-b7ef-43ad-97b0-60088a352b68" alt="commits por integrante">
</p>

### 5.2.3. Sprint 3

Durante el Sprint 3 del proyecto FitManager, el enfoque se centró en el desarrollo del backend mediante la implementación de FitManager Web Services. Se crearon APIs RESTful para las entidades del sistema, permitiendo operaciones CRUD y gestión de relaciones. Además, se estableció la conexión con la base de datos MySQL, configurando los repositorios y entidades de dominio dentro de una arquitectura basada en Clean Architecture y DDD. Este sprint sentó las bases de la lógica de negocio, integrando validaciones, manejo de errores y asegurando una estructura escalable para el sistema.

#### 5.2.3.1. Sprint Planning

| **Sprint #**                     | Sprint 3 |
|----------------------------------|---------|
|        | **Sprint Planning Background** |
| Date                             | 10/06/2025 |
| Location                         | Discord group call |
| Prepared by                      | Cassius Martel |
| Attendees (to planning meeting)  | Juan Alvarado, Renzo Luque, Cassius Martel, Tomio Nakamurakare, Victor Ortiz |
| Sprint 2 Review Summary          | During Sprint 2, the team successfully developed the frontend of the FitManager web application, focusing on the key sections for managing members, staff, classes, inventory, notifications, and income. This sprint also introduced foundational support for accessibility and internationalization, allowing the interface to adapt to different languages and assistive technologies. The views created are now fully navigable and interactive, offering gym administrators and owners a first functional version of the platform to manage their operational and financial resources. Additionally, fake APIs were implemented to simulate data interactions, laying the groundwork for integration with the future backend services. |
| Sprint 2 Retrospective Summary   | The team highlighted strong progress during Sprint 2, particularly in turning UX/UI designs into functional interfaces and aligning the frontend with the project's architectural standards. The use of fake APIs proved valuable for testing and iterating on components in a realistic context. Team members appreciated the improved communication flows and greater design-development alignment compared to Sprint 1. However, there were still minor challenges in maintaining consistent code structure and ensuring accessibility compliance across all views. Moving forward, the team agreed to establish stricter coding guidelines and to perform earlier accessibility reviews during development. |
|      | **Sprint Goal & User Stories** |
| Sprint 3 Goal                    | Our focus is on: developing the backend services of the FitManager platform, including the creation of RESTful APIs, definition of domain entities, implementation of use cases, and configuration of the connection with the MySQL database using a Clean Architecture and Domain-Driven Design (DDD) approach. <br><br>We believe it delivers: a solid and scalable foundation for handling business logic and data persistence, enabling secure and efficient interaction between the frontend and the database, while ensuring the modularity and maintainability of the system. <br><br>This will be confirmed when: each API endpoint successfully handles requests for the core entities (members, staff, classes, inventory, notifications, and income), returns expected responses, and integrates correctly with the simulated frontend developed in the previous sprint. |
| Sprint 3 Velocity                | 18 |
| Sum of Story Points              | 16 |

#### 5.2.3.2. Aspect Leaders and Collaborators

En esta sección se elaborará la **Leadership-and-Collaboration Matrix (LACX)**, un artefacto que permite identificar claramente quién lidera (L) y quién colabora (C) en cada aspecto funcional del Sprint 3.

| Team Member (Last Name, First Name) | GitHub Username             | Classes Feature | Employees Feature | Finances Feature | Inventory Feature | Members Feature | Notifications Feature | Internationalization Feature |
|-------------------------------------|------------------------------|------------------|-------------------|------------------|--------------------|------------------|-------------------------|-------------------------------|
| Alarcón, Víctor Nicolás             | @Nico1234556                 |                  | L                 |                  |                    |                  | L                       |                               |
| Nakamurakare Teruya, Alex Tomio     | @kistoo                      |                  |                   |                  | L                  |                  |                         |                               |
| Martel Andrade, Cassius Estefano    | @kcc12321                    |                  |                   |                  |                    | L                |                         |                               |
| Luque Minaya, Renzo Andrés          | @renzoluquem                 |                  |                   | L                |                    |                  |                         | L                             |
| Alvarado De La Cruz, Juan Carlos    | @JuanCarlosAlvarado900       | L                |                   |                  |                    |                  |                         |                               |

#### 5.2.3.3 Sprint Backlog 3

El presente Sprint Backlog 3 detalla el conjunto de tareas y Technical Stories seleccionadas del Product Backlog que el equipo de FitManager se ha comprometido a completar durante esta iteración. El objetivo principal de este sprint fue desarrollar los servicios backend de la plataforma, divididos en seis bounded contexts: gestión de clases, empleados, finanzas, inventario, miembros y notificaciones, además de implementar la internacionalización del backend con soporte multilingüe para mensajes y validaciones.

| Technical Story ID | Task ID | Descripción                                                                 | Estimación (hrs) | Asignado a           | Estado |
|--------------------|---------|------------------------------------------------------------------------------|------------------|-----------------------|--------|
| TS01               | T01     | Implementar y Validar la solicitud POST de Creación de Miembro               | 2                | Cassius Martel        | Done   |
|                    | T02     | Implementar y Validar la solicitud GET de Listado de Miembros                | 1                | Cassius Martel        | Done   |
|                    | T03     | Implementar y Validar la solicitud PUT de Actualización de Miembro           | 2                | Cassius Martel        | Done   |
|                    | T04     | Implementar y Validar la solicitud DELETE de Eliminación de Miembro          | 2                | Cassius Martel        | Done   |
|                    | T05     | Implementar y Validar la solicitud GET de Listado de Tipos de Membresía      | 1                | Cassius Martel        | Done   |
| TS02               | T06     | Implementar y Validar la solicitud POST de Creación de Clase                 | 2                | Juan Alvarado         | Done   |
|                    | T07     | Implementar y Validar la solicitud GET de Listado de Clases                  | 1                | Juan Alvarado         | Done   |
|                    | T08     | Implementar y Validar la solicitud PUT de Actualización de Clase             | 2                | Juan Alvarado         | Done   |
|                    | T09     | Implementar y Validar la solicitud DELETE de Eliminación de Clase            | 2                | Juan Alvarado         | Done   |
| TS03               | T10     | Implementar y Validar la solicitud POST de Registro de Asistencia            | 1                | Juan Alvarado         | Done   |
|                    | T11     | Implementar y Validar la solicitud GET de Listado de Registros de Asistencia | 2                | Juan Alvarado         | Done   |
|                    | T12     | Implementar y Validar la solicitud GET de Listado de Reservas por Clase      | 1                | Juan Alvarado         | Done   |
| TS04               | T13     | Implementar y Validar la solicitud POST de Creación de Empleado              | 2                | Victor Ortíz          | Done   |
|                    | T14     | Implementar y Validar la solicitud GET de Listado de Empleado                | 1                | Victor Ortíz          | Done   |
|                    | T15     | Implementar y Validar la solicitud PUT de Actualización de Empleado          | 2                | Victor Ortíz          | Done   |
|                    | T16     | Implementar y Validar la solicitud DELETE de Eliminación de Empleado         | 1                | Victor Ortíz          | Done   |
| TS05               | T17     | Implementar y Validar la solicitud POST de Creación de Ítem                  | 2                | Tomio Nakamurakare    | Done   |
|                    | T18     | Implementar y Validar la solicitud GET de Listado de Ítem                    | 1                | Tomio Nakamurakare    | Done   |
|                    | T19     | Implementar y Validar la solicitud PUT de Actualización de Ítem              | 2                | Tomio Nakamurakare    | Done   |
|                    | T20     | Implementar y Validar la solicitud DELETE de Eliminación de Ítem             | 1                | Tomio Nakamurakare    | Done   |
| TS06               | T21     | Implementar y Validar la solicitud POST de Registro de Pago de Membresía     | 2                | Renzo Luque           | Done   |
|                    | T22     | Implementar y Validar la solicitud GET de Listado de Pagos de Membresía      | 1                | Renzo Luque           | Done   |
|                    | T23     | Implementar y Validar la solicitud POST de Registro de Pago de Salario       | 2                | Renzo Luque           | Done   |
|                    | T24     | Implementar y Validar la solicitud GET de Listado de Pagos de Salario        | 1                | Renzo Luque           | Done   |
| TS07               | T25     | Implementar y Validar la solicitud POST de Registro de Compra de Insumos     | 3                | Renzo Luque           | Done   |
|                    | T26     | Implementar y Validar la solicitud GET de Listado de Compras de Insumos      | 2                | Renzo Luque           | Done   |
| TS08               | T27     | Implementar y Validar la solicitud POST de Envío de Notificación a Miembro   | 2                | Victor Ortíz          | Done   |
|                    | T28     | Implementar y Validar la solicitud GET de Listado de Notificaciones de Miembros | 1              | Victor Ortíz          | Done   |
|                    | T29     | Implementar y Validar la solicitud POST de Envío de Notificación a Empleado  | 2                | Victor Ortíz          | Done   |
|                    | T30     | Implementar y Validar la solicitud GET de Listado de Notificaciones de Empleados | 1            | Victor Ortíz          | Done   |

Historias de usuario a desarrollar en este Sprint
<p align="center">
  <img src="https://github.com/user-attachments/assets/70bf36d6-264d-471d-8361-b86a4b9417a2" alt="Historias de usuario para este sprint">
</p>

Ejemplo de tareas y descripción de una historia
<p align="center">
  <img src="https://github.com/user-attachments/assets/e7c4b2dc-5b83-4765-82b1-8a10e499a863" alt="Tareas y descripción de una historia">
</p>

#### 5.2.3.4. Development Evidence for Sprint Review

En el Sprint 3, se llevó a cabo el desarrollo integral de la lógica de negocio de la aplicación, estructurándola en seis Bounded Contexts bien definidos: Classes, Employees, Finances, Inventory, Members y Notifications. Cada uno de estos contextos fue implementado siguiendo una arquitectura modular y por capas, lo que permitió una clara separación de responsabilidades entre el Dominio (con sus entidades y Value Objects), la Aplicación (con sus comandos, queries y servicios de aplicación), la Infraestructura (con las implementaciones de repositorios y la persistencia de datos mediante Entity Framework Core) y las Interfaces REST (con los DTOs, ensambladores y controladores). Este enfoque no solo facilitó el desarrollo simultáneo y el mantenimiento, sino que también aseguró la adherencia a principios de diseño robustos, culminando en la exposición de una API RESTful documentada con Swagger para su consumo eficiente.

Bounded Contexts con su respectiva división de carpetas
<p align="center">
  <img src="https://github.com/user-attachments/assets/033f6cf3-31bf-4a7d-8820-11558cbcf4a4" alt="bounded contexts en rider">
</p>

Base de datos en MySQL
<p align="center">
  <img src="https://github.com/user-attachments/assets/67a02a7c-5841-4c48-8a2e-cccd2fcbe8ca" alt="tablas en mysql">
</p>

Endpoints implementados
<p align="center">
  <img src="https://github.com/user-attachments/assets/07aacd0d-7be4-43be-b381-94d60629a531" alt="endpoints1">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/a9316166-66c3-4db6-9c17-9c77a95ccb83" alt="endpoints2">
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/739fe0f9-b3ab-4f07-a234-45a992130002" alt="endpoints3">
</p>

Video explicativo sobre lo desarrollado en este Sprint:

#### 5.2.3.5. Execution Evidence for Sprint Review.

#### 5.2.3.6. Services Documentation Evidence for Sprint Review

#### 5.2.3.7. Software Deployment Evidence for Sprint Review

#### 5.2.3.8. Team Collaboration Insights during Sprint

Durante el Sprint 3, el equipo FitManager prosiguió con la implementación de la metodología ágil Scrum y las herramientas de colaboración establecidas, esta vez enfocándose en el desarrollo del backend y la lógica de negocio de la aplicación web. Este sprint se distinguió por un esfuerzo intensivo y coordinado en la construcción de una arquitectura robusta, materializada en seis Bounded Contexts principales: Classes, Employees, Finances, Inventory, Members y Notifications. La comunicación se mantuvo fluida y constante a través de nuestro grupo de Whatsapp y Discord, complementada con reuniones realizadas en días libres para una sincronización efectiva, mientras que la gestión y seguimiento de las tareas continuó centralizada en Pivotal Tracker.
<p align="center">
  <img src="https://github.com/user-attachments/assets/202c2db0-5698-4e7b-8200-774a6958fe55" alt="pivotal tracker">
</p>

Uso de Herramientas de Colaboración (GitHub): 
<p align="center">
  <img src="https://github.com/user-attachments/assets/7cca47c3-6f5f-4230-9ccb-f56f9a926353" alt="herramientas de colaboración">
</p>

Evidencia de las ramas
<p align="center">
  <img src="https://github.com/user-attachments/assets/e74f675a-e369-4b9e-8d98-dc919ef36b3a" alt="ramas del repositorio">
</p>

Evidencia de commits por integrante del grupo
<p align="center">
  <img src="https://github.com/user-attachments/assets/1a24b070-c05f-40ad-bade-4f6c1a3738e4" alt="commits por integrante">
</p>

## 5.3. Validation Interviews

### 5.3.1. Diseño de Entrevistas

### 5.3.2. Registro de Entrevistas

### 5.3.3. Evaluaciones según Heurísticas

## 5.4. Video About-the-Product

# Conclusiones

* Consideramos que nuestro equipo ha realizado un esfuerzo exhaustivo en la obtención y el análisis de los requisitos. Las diversas técnicas que empleamos, incluyendo entrevistas, needfinding, creación de user personas, journey maps, y más, nos han permitido obtener una comprensión profunda de las necesidades de los usuarios y las demandas del mercado. Este enfoque integral proporciona una base sólida para el desarrollo de un producto centrado en el usuario.
* Nuestro equipo se ha adherido a un proceso de diseño estructurado y sistemático. Hemos avanzado lógicamente desde la especificación de los requisitos hasta el diseño detallado del producto, considerando cuidadosamente varios aspectos como la arquitectura de la información, el diseño de la interfaz de usuario/experiencia de usuario, la arquitectura del software y el diseño de la base de datos. Este enfoque organizado ha contribuido significativamente a la claridad y la coherencia del proyecto.
* Hemos puesto un fuerte énfasis en la experiencia del usuario (UX) a lo largo del proyecto. La aplicación de los principios de Lean UX, el desarrollo de user personas detalladas y el diseño meticuloso de las interfaces de usuario y los flujos de usuario demuestran nuestro compromiso con la creación de un producto que no solo sea funcional, sino que también proporcione una experiencia agradable e intuitiva para los usuarios.
* Nuestro equipo ha desarrollado una arquitectura de software bien definida, utilizando los principios del Domain Driven Design y creando diagramas detallados (Contexto, Contenedor, Componentes). Esto refleja nuestra comprensión de las mejores prácticas de diseño de software y proporciona un marco robusto para las etapas posteriores de implementación.
* Hemos avanzado con éxito más allá de las fases de planificación y diseño y ya hemos logrado un progreso tangible en la implementación, como lo demuestra el trabajo completado durante el Sprint 1 para la landing page. Esto demuestra nuestra capacidad para traducir las especificaciones de diseño en entregables concretos y nuestro compromiso para llevar el producto a buen término.
* La adopción de Vue como framework, junto con la consideración de la internacionalización (i18n) y la accesibilidad (a11y) desde las etapas iniciales del desarrollo del frontend, demuestra un compromiso con la creación de una aplicación moderna, inclusiva y adaptable a diferentes audiencias. Este enfoque proactivo sentará una base sólida para la escalabilidad y la usabilidad a largo plazo.
* La estrategia de dividir la interfaz de usuario en componentes reutilizables en Vue no solo facilita la organización del trabajo entre el equipo, sino que también mejora la mantenibilidad y la escalabilidad del código. Además, la utilización de GitHub con una disciplina de commits y branches refleja una práctica profesional en el control de versiones, lo que contribuye a la estabilidad y la colaboración efectiva dentro del equipo de desarrollo.
* Hemos establecido una sólida base de backend aplicando Domain-Driven Design (DDD) y Clean Architecture. La clara separación en capas (Dominio, Aplicación, Infraestructura, Interfaces) junto con patrones como el Unit of Work y un Base Repository genérico, garantiza un código mantenible, testable y adaptable. Este enfoque nos prepara para construir un sistema resiliente y de alto rendimiento que responde eficazmente a las necesidades del negocio.

# Recomendaciones

* Como equipo, recomendamos que prioricemos y refinemos continuamente el Product Backlog. Este debe ser un proceso continuo, informado por los comentarios de los usuarios y la evolución de los objetivos comerciales. Debemos enfocarnos en entregar las características más valiosas en las primeras versiones e iterar en función de las pruebas de usuario.
* Recomendamos encarecidamente la implementación de una estrategia de pruebas integral que cubra todos los aspectos cruciales de la aplicación. Esta estrategia debe abarcar pruebas unitarias, pruebas de integración, pruebas de sistema y pruebas de aceptación del usuario para garantizar la calidad, la confiabilidad y la estabilidad del producto.
* Nuestro equipo debe adherirse a un enfoque de desarrollo iterativo, caracterizado por sprints cortos y ciclos de retroalimentación frecuentes. Debemos priorizar la incorporación de los comentarios de los usuarios de forma temprana y frecuente para validar nuestras suposiciones y realizar los ajustes necesarios en el diseño y la funcionalidad.
* Debemos enfatizar la importancia de mantener una documentación completa y actualizada de la arquitectura, el diseño y la implementación del sistema. Además, debemos fomentar una sólida cultura de intercambio de conocimientos dentro del equipo para garantizar la continuidad, facilitar la colaboración y agilizar los esfuerzos de desarrollo futuros.
* Para asegurar una experiencia de usuario fluida y evitar posibles cuellos de botella en etapas posteriores, se recomienda establecer una estrategia de integración temprana y continua entre el frontend desarrollado en Vue y el futuro backend de la aplicación. Esto podría incluir la definición clara de APIs, la creación de mocks para el desarrollo paralelo y la realización de pruebas de integración frecuentes para validar la correcta comunicación y el flujo de datos entre ambas partes del sistema.
* Para la calidad continua del backend, recomendamos priorizar la implementación exhaustiva de pruebas automatizadas a todos los niveles, especialmente en las capas de Dominio y Aplicación. Además, es crucial mantener un proceso de revisión de código sistemático para asegurar la adherencia a los principios de DDD y Clean Architecture, mitigando la deuda técnica y promoviendo un crecimiento ordenado del proyecto.

# Bibliografía

Álvarez, A. (2020, 5 de agosto). 5W2H: Qué significa, para qué sirve, cómo aplicarla y algunos ejemplos. LeanConstructionMexico. https://www.leanconstructionmexico.com.mx/post/5w2h-qu%C3%A9-significa-para-qu%C3%A9-sirve-c%C3%B3mo-aplicarla-y-algunos-ejemplos

AppDesign. (2023). ¿Cuánto cuesta desarrollar una app? https://appdesign.dev/cuanto-cuesta-desarrollar-una-app/

Booking Ninjas. (2024, 8 de mayo). Impact of Gym Management Software on the Fitness Industry. https://www.bookingninjas.com/blog/impact-of-gym-management-software-on-the-fitness-industry

Chiroque, C. (2024). Uso de tecnología aumenta la productividad en las empresas hasta en un 40% en Perú, según Rankmi. Stornia. https://stornia.com/mundo/peru/tecnologia-pe/2024/10/09/uso-de-tecnologia-aumenta-la-productividad-en-las-empresas-hasta-en-un-40-en-peru-segun-rankmi/

Cibanal, S. (2022). La transformación digital en los gimnasios. Trainingym. https://blog.trainingym.com/es/blog/la-transformacion-digital-en-los-gimnasios

Data Bridge Market Research. (2024). Global Gym Management Software Market. https://www.databridgemarketresearch.com/es/reports/global-gym-management-software-market

Forbes Perú. (2023, marzo 8). Smart Fit invertirá US$ 21 millones en 14 nuevos gimnasios en Perú durante 2023. https://forbes.pe/negocios/2023-03-08/smart-fit-invertira-us-21-millones-en-14-nuevos-gimnasios-en-peru-durante-2023

Gestión. (2024). La asistencia a gimnasios: entre la recesión y una mayor disposición al gasto. https://gestion.pe/economia/empresas/la-asistencia-a-gimnasios-entre-la-recesion-y-una-mayor-disposicion-al-gasto-empresas-peru-inversiones-impronta-research-noticia/?ref=gesr

Ipsos Perú. (2024). Lima activa. https://www.ipsos.com/es-pe/lima-activa

Mercado Fitness. (2019, agosto 20). Latinoamérica cuenta con más de 46 mil gimnasios. https://mercadofitness.com/latinoamerica-cuenta-con-mas-de-46-mil-gimnasios

Mercado Fitness. (2024, abril 5). El 55% de los latinoamericanos activos prefieren hacer ejercicio en gimnasios. https://mercadofitness.com/latinoamericanos-activos-prefieren-hacer-ejercicio-gimnasios

Shrivastava, M., Mishra, R., Patil, A., & Thakare, R. (2022). Digitalization in Gym Management System. International Journal of Research Publication and Reviews, 3(12), 354–358. https://ijrpr.com/uploads/V5ISSUE3/IJRPR23946.pdf

Tandon, M. (2025, 22 de febrero). 100 Gym Membership Retention Statistics. Smart Health Clubs. https://smarthealthclubs.com/blog/100-gym-membership-retention-statistics/

Universidad Nacional de Cuyo. (2019). El mercado del fitness en América Latina. https://bdigital.uncu.edu.ar/objetos_digitales/17929/kemelmajer-fce.pdf

# Anexos

Anexo A. Entrevistas

Entrevistas FitManager. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/EUF7nqxQcJZBqixiAcPMVAABYJ-a94IJxisICrRIln7zJQ?e=XyZ6WD

Anexo B. Videos del proyecto

Web applications. prototyping.https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/ERuo8X7cvC5FqEx6YCN0JpYBKXMEph_E6QqXlAQ9kbxQHw?e=TTxgUe
![image](https://github.com/user-attachments/assets/9d547fca-102b-4ac3-a75b-08701f3a993e)

Execution Evidence for Sprint 1 Review. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/Ed9gIYEnn7pHoo-q92jS8bEBMDLFkl5UR49PFMps5WnhhQ?e=Whi8i4

Execution Evidence for Sprint 2 Review. https://upcedupe-my.sharepoint.com/:v:/g/personal/u20201f855_upc_edu_pe/Eadp2HRIXb5DnFlCBCUolFQBwWQPHVned1ARzTaDKu71Lg?e=nLiT9C

Anexo C. UI Design

Wireframes y mockups. https://www.figma.com/design/4gPCmaqbcavYIRPzj9J5iK/UI-Design?node-id=1-3818&t=JJGdaovG3eenwj5D-1

Web applications prototyping. https://www.figma.com/proto/5Hnhhda3IFBYmJFJmVGhAO/FitManager?node-id=2428-2091&p=f&t=XULRI0q7bMtdQZ8b-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2428%3A2091

Landing page prototyping. https://www.figma.com/proto/5Hnhhda3IFBYmJFJmVGhAO/FitManager?node-id=2577-1607&p=f&t=eDMDCmcxhafsKd5D-1&scaling=scale-down&content-scaling=fixed&page-id=2577%3A1441

Anexo D. Pivotal Tracker

FitManager. https://app.litetracker.com/n/projects/4855e0

Anexo E. Lean UX Canvas

Fit Manager Lean UX Canvas. https://drive.google.com/file/d/1s4bRIgJBOXdcWbEElVUIdd4UmPVrTLMN/view

Anexo F. Landing Page

FitManager. https://fitflow-appweb.github.io/FitManagerLanding/

Anexo G. Web Application

FitManager. https://fitmanager-f6e6e.web.app/
