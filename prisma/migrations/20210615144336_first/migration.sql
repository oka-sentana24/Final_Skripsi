-- CreateTable
CREATE TABLE "Pengguna" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Siswa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "penggunaId" INTEGER NOT NULL,
    "kelasId" INTEGER,
    "uploadId" INTEGER,
    "nisn" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "tanggal_lahir" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "no_tlp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "kewarganegaraan" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "nama_ayah" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "pekerjaan_ayah" TEXT NOT NULL,
    "pekerjaan_ibu" TEXT NOT NULL,
    "bio" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Guru" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "penggunaId" INTEGER NOT NULL,
    "kelasId" INTEGER,
    "uploadId" INTEGER,
    "nip" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "tanggal_lahir" TEXT NOT NULL,
    "agama" TEXT NOT NULL,
    "no_tlp" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "jabatan" TEXT,
    "ktp" TEXT NOT NULL,
    "kewarganegaraan" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "nama_ayah" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "pekerjaan_ayah" TEXT NOT NULL,
    "pekerjaan_ibu" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "tahun_ajaran" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Guru_Kelas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "kelasId" INTEGER NOT NULL,
    "guruId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
