import prisma from '../../../lib/prisma';

// POST /api/post
// export default async function handle(req, res) {
//   const { username, ...dataSiswa } = req.body
//   console.log('test', req.body)
//   const pengguna = await prisma.pengguna.create({
//     data: {
//       username,
//       password:username,
//     },
//   })

//   const siswa = await prisma.siswa.create({
//     data: {
//     id_pengguna: pengguna.id_pengguna,
//     nisn : username,
//      ...dataSiswa
//     },
//   })
//   res.json({
//     pengguna,
//     siswa
//   })
// }
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, ...dataSiswa } = req.body
      console.log('test', req.body)
      const pengguna = await prisma.pengguna.create({
        data: {
          username,
          password:username,
        },
      })
    
      const siswa = await prisma.siswa.create({
        data: {
        penggunaId: pengguna.id,
        nisn : username,
         ...dataSiswa
        },
      })
      res.json({
        pengguna,
        siswa
      })
  } else if (req.method === 'GET'){
    const { penggunaId, ...dataSiswa} = req.body
    // const skip = 10 * take
    const getAll = await prisma.siswa.findMany({
      skip: 3,
      take: 10,
      where: {
        penggunaId,
        ...dataSiswa
      },
      orderBy: {
        id: 'desc',
      },
    })
    res.json(getAll)
  }else{
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}