import React, { useState } from "react";
import { Html } from "@react-three/drei";

const questions = [
  {
    question:
      "¿Qué acción es clave para reducir la acidificación de los océanos?",
    options: [
      "Incrementar el uso de combustibles fósiles",
      "Reducir las emisiones de CO₂ adoptando energías renovables",
      "Prohibir la pesca en todas las zonas costeras",
      "Fomentar el uso de plásticos biodegradables",
    ],
    answer: 1,
  },

  {
    question:
      "¿Cuál es una de las principales consecuencias de la acidificación para las especies marinas?",
    options: [
      "Aumento de la biodiversidad ",
      "Mejora en la reproducción de especies ",
      "Dificultad para formar caparazones y esqueletos de carbonato de calcio",
      "E Mayor resistencia a cambios ambientales  ",
    ],
    answer: 2,
  },

  {
    question:
      "¿Cómo afecta la acidificación de los océanos a las comunidades costeras?",
    options: [
      "Reduce el turismo pero mejora la pesca",
      "Protege las costas contra tormentas y erosión",
      "Amenaza la economía y la seguridad alimentaria",
      "Disminuye la diversidad pero no afecta a las personas",
    ],
    answer: 2,
  },

  {
    question:
      "¿Cuál es la principal causa de la acidificación de los océanos?",
    options: [
      "La sobrepesca",
      "El aumento del dióxido de carbono (CO₂) en la atmósfera",
      "La contaminación plástica  ",
      "El aumento de la temperatura del agua ",
    ],
    answer: 1,
  },

  {
    question:
      "¿Cuál es una estrategia efectiva para reducir la contaminación del agua causada por la agricultura?",

    options: [
      "Utilizar fertilizantes y pesticidas sintéticos en mayores cantidades",
      "Promover técnicas de agricultura sostenible, como fertilizantes orgánicos",
      "Incrementar la deforestación cercana a campos agrícolas",
      "Construir más fábricas cerca de fuentes de agua",
    ],
    answer: 1,
  },

  {
    question:
      "¿Cuál de las siguientes es una causa principal de la contaminación del agua?",

    options: [
      "El uso de detergentes biodegradables en el hogar",
      "La presencia de árboles cerca de cuerpos de agua",
      "El vertido de desechos industriales no tratados en ríos y mares",
      "La instalación de sistemas de filtración avanzados en plantas de tratamiento",
    ],
    answer: 2,
  },

  {
    question:
      "¿Qué ocurre cuando sustancias dañinas ingresan en cuerpos de agua como ríos, lagos y océanos?",
    options: [
      "Mejoran la calidad del agua",
      "Favorecen el crecimiento de ecosistemas acuáticos",
      "Generan agua potable más rápidamente",
      "Pueden volverse peligrosos para humanos, vida silvestre y el medio ambiente",
    ],
    answer: 3,
  },

  {
    question: "¿Cuáles son algunos de los efectos de la escasez de agua?",
    options: [
      "Mejora la producción de alimentos",
      "Aumenta la estabilidad económica global",
      "Puede provocar crisis humanitarias y conflictos",
      "Facilita el acceso al agua limpia",
    ],
    answer: 2,
  },
  {
    question:
      "¿Cuál de las siguientes es una solución para la escasez de agua?",
    options: [
      "Incrementar el uso de agua en procesos industriales",
      "Reutilizar aguas residuales tratadas",
      "Contaminar fuentes de agua para acelerar su renovación",
      "Reducir la desalinización en zonas costeras",
    ],
    answer: 1,
  },
  {
    question:
      "¿Por qué es importante proteger las fuentes naturales de agua?",
    options: [
      "Para asegurar su disponibilidad a largo plazo",
      "Para desviar el agua hacia zonas urbanas",
      "Para permitir la contaminación controlada",
      "Para reducir la biodiversidad en los ecosistemas",
    ],
    answer: 0,
  },
];

const Html3DWaterPollution = ({ onOptionSelected }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionClick = (optionIndex) => {
    const isCorrect =
      optionIndex === questions[currentQuestionIndex].answer;

    onOptionSelected && onOptionSelected(isCorrect);

    // Cambiar a la siguiente pregunta o finalizar
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Cuestionario completado");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Html
      center
      distanceFactor={15}
      transform
      position={[-8, -10, 0]}
      style={{
        color: "white",
        fontSize: "14pt",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>{currentQuestion.question}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px", // Espaciado horizontal entre opciones
            marginTop: "20px",
          }}
        >
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              style={{
                cursor: "pointer",
                padding: "10px 20px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                textAlign: "center",
                flex: "1", // Opcional: igual ancho para todas las opciones
              }}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </Html>
  );
};

// Componente principal con modelo
const ModelWithInteraction = () => {
  const handleModelClick = (optionIndex) => {
    console.log(`Opción seleccionada: ${optionIndex}`);
  };

  return (
    <>
      <mesh onClick={() => handleModelClick(1)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <Html3DWaterPollution
        onOptionSelected={(isCorrect) => {
          console.log(isCorrect ? "Respuesta correcta" : "Respuesta incorrecta");
        }}
      />
    </>
  );
};

export default ModelWithInteraction;