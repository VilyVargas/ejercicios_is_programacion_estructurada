const partidos = [
  {
    juego: 1,
    LosToros: 0,
    SanFernando: 1,
  },
  {
    juego: 2,
    LosToros: 2,
    SanFernando: 2,
  },
  {
    juego: 3,
    LosToros: 3,
    SanFernando: 1,
  },
  {
    juego: 4,
    LosToros: 0,
    SanFernando: 0,
  },
  {
    juego: 5,
    LosToros: 1,
    SanFernando: 2,
  },
  {
    juego: 6,
    LosToros: 2,
    SanFernando: 3,
  },
  {
    juego: 7,
    LosToros: 1,
    SanFernando: 1,
  },
];

const numPartidos = partidos.length;

for (let i = 0; i < numPartidos.length; i++) {
  const p = partidos.shift();
  console.log(
    `resultado del partido: ${p.juego}: Los Toros ${p.LosToros} - San Fernando ${p.SanFernando}`
  );
}

partidos.forEach((partido) => {
  let p = partido.shift();
  console.log(
    `resultado del partido: ${p.juego}: Los Toros ${p.LosToros} - San Fernando ${p.SanFernando}`
  );
});

console.log("Partidos:", partidos);

// resultado del partido1
console.log(
  `resultado del partido: ${p1.juego}: Los Toros ${p1.LosToros} - San Fernando ${p1.SanFernando}`
);
const p1 = partidos.shift();
// resultado del partido2
console.log(
  `resultado del partido: ${p2.juego}: Los Toros ${p2.LosToros} - San Fernando ${p2.SanFernando}`
);
const p2 = partidos.shift();
// resultado del partido3
console.log(
  `resultado del partido: ${p3.juego}: Los Toros ${p3.LosToros} - San Fernando ${p3.SanFernando}`
);
const p3 = partidos.shift();
// resultado del partido4
console.log(
  `resultado del partido: ${p4.juego}: Los Toros ${p4.LosToros} - San Fernando ${p4.SanFernando}`
);
const p4 = partidos.shift();
// resultado del partido5
console.log(
  `resultado del partido: ${p5.juego}: Los Toros ${p5.LosToros} - San Fernando ${p5.SanFernando}`
);
const p5 = partidos.shift();
// resultado del partido6
console.log(
  `resultado del partido: ${p6.juego}: Los Toros ${p6.LosToros} - San Fernando ${p6.SanFernando}`
);
const p6 = partidos.shift();
// resultado del partido7
console.log(
  `resultado del partido: ${p7.juego}: Los Toros ${p7.LosToros} - San Fernando ${p7.SanFernando}`
);
const p7 = partidos.shift();
