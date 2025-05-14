import prisma from "@/lib/db";

export default async function BasicPhoto() {
  const photos = await prisma.photos.findMany();

  console.log(photos);

  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>{photo.title}</li>
      ))}
    </ul>
  );
}
