//Import prisma client
const prisma = require("../prisma");
// Fake content for tracks
const { faker } = require("@faker-js/faker");

const seed = async (numTracks = 20) => {
  // Create 20 tracks
  const tracks = Array.from({ length: numTracks }, () => ({
    name: faker.music.songName(),
  }));
  await prisma.track.createMany({ data: tracks });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
