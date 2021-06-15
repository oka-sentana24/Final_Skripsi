import { ImportsNotUsedAsValues } from "typescript";

export interface Pengguna {
  id: number;
  username: string;
  password: string;
  role?: string;
  date: string;
}

export interface Siswa {
  id: number;
  penggunaId: Pengguna;
  kelasId?: number;
  uploadId?: Location;
  nisn: string;
  nama: string;
  alamat: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  agama: string;
  no_tlp: string;
  email: string;
  kewarganegaraan: string;
  kecamatan: string;
  kabupaten: string;
  nama_ayah: string;
  nama_ibu: string;
  pekerjaan_ayah: string;
  pekerjaan_ibu: string;
  bio?: string;
  date:string;
}

