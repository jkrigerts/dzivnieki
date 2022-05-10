import { SimpleGrid, Container } from "@mantine/core";

import AnimalCardSt from "./AnimalCardSt";

const dati = [
  {
    name: "Džeris",
    species: "Suns",
    age: 5,
    description: "Džeris ir draudzīgs. Būs piemērots ģimenēm ar bērniem.",
    image:
      "https://media.istockphoto.com/photos/happy-adopted-dog-playing-in-the-garden-picture-id1138793510?k=20&m=1138793510&s=612x612&w=0&h=ZnFjIksvjNWwMTD0H4fH24h4eqEMb1TvGZRGG5acUzg=",
  },
  {
    name: "Muris",
    species: "Kaķis",
    age: 7,
    description:
      "Murim patīk sildīties pie kamīna, tomēr vēl vairāk viņš novērtē cilvēka sirds siltumu.",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Rodžers",
    species: "Jūrascūka",
    age: 3,
    description: "Patīk fizika",
    image:
      "https://th.bing.com/th/id/R.6527ece1d438d973d1f5560af9b179b1?rik=csn8xw%2bhT9XFkg&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f15100000%2fGuinea-Pigs-guinea-pigs-15107381-1600-1200.jpg&ehk=8LpFiJTPs9zr9CaER4RQneQTInnuJEcRegNDmABSEhM%3d&risl=&pid=ImgRaw&r=0",
  },
];

function AppSt() {
  const allAnimalsRendered = dati.map((animal) => (
    <AnimalCardSt dati={animal} key={animal.name} />
  ));

  return (
    <Container size={1080}>
      <SimpleGrid cols={3}>{allAnimalsRendered}</SimpleGrid>
    </Container>
  );
}

export default AppSt;
