import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router'
 
const SiswaCreate: FC = () => {
    const router = useRouter()
    const formik = useFormik({
    initialValues: {
        username: "",
        nama: "",
        alamat: "",
        jenis_kelamin: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        agama: "",
        no_tlp: "",
        kewarganegaraan: "",
        kecamatan: "",
        kabupaten: "",
        nama_ayah: "",
        pekerjaan_ayah: "",
        nama_ibu: "",
        pekerjaan_ibu: "",
        email: ""
    },
    validationSchema: Yup.object({
    username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    nama: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
        try{
            console.log('test',values)
            //    alert(JSON.stringify(values, null, 2));
            axios.post(`http://localhost:3000/api/siswa`, values)
            router.push('/admin')
            } catch (error) {
            console.error(error)
            }
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="username">nisn</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div>{formik.errors.username}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="nama">nama</label>
                <input
                    id="nama"
                    name="nama"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nama}
                />
                {formik.touched.nama && formik.errors.nama ? (
                    <div>{formik.errors.nama}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="alamat">alamat</label>
                <input
                    id="alamat"
                    name="alamat"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.alamat}
                />
                {formik.touched.alamat && formik.errors.alamat ? (
                    <div>{formik.errors.alamat}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="jenis_kelamin">Jenis Kelamin</label>
                <input
                    id="jenis_kelamin"
                    name="jenis_kelamin"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.jenis_kelamin}
                />
                {formik.touched.jenis_kelamin && formik.errors.jenis_kelamin ? (
                    <div>{formik.errors.jenis_kelamin}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="tempat_lahir">Tempat Lahir</label>
                <input
                    id="tempat_lahir"
                    name="tempat_lahir"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tempat_lahir}
                />
                {formik.touched.tempat_lahir && formik.errors.tempat_lahir ? (
                    <div>{formik.errors.tempat_lahir}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
                <input
                    id="tanggal_lahir"
                    name="tanggal_lahir"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tanggal_lahir}
                />
                {formik.touched.tanggal_lahir && formik.errors.tanggal_lahir ? (
                    <div>{formik.errors.tanggal_lahir}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="agama">Agama</label>
                <input
                    id="agama"
                    name="agama"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.agama}
                />
                {formik.touched.agama && formik.errors.agama ? (
                    <div>{formik.errors.agama}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="no_tlp">No Tlp</label>
                <input
                    id="no_tlp"
                    name="no_tlp"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.no_tlp}
                />
                {formik.touched.no_tlp && formik.errors.no_tlp ? (
                    <div>{formik.errors.no_tlp}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="kewarganegaraan">Kewarganegaraan</label>
                <input
                    id="kewarganegaraan"
                    name="kewarganegaraan"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.kewarganegaraan}
                />
                {formik.touched.kewarganegaraan && formik.errors.kewarganegaraan ? (
                    <div>{formik.errors.kewarganegaraan}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="kecamatan">Kecamatan</label>
                <input
                    id="kecamatan"
                    name="kecamatan"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.kecamatan}
                />
                {formik.touched.kecamatan && formik.errors.kecamatan ? (
                    <div>{formik.errors.kecamatan}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="kabupaten">Kabupaten</label>
                <input
                    id="kabupaten"
                    name="kabupaten"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.kabupaten}
                />
                {formik.touched.kabupaten && formik.errors.kabupaten ? (
                    <div>{formik.errors.kabupaten}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="nama_ayah">Nama Ayah</label>
                <input
                    id="nama_ayah"
                    name="nama_ayah"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nama_ayah}
                />
                {formik.touched.nama_ayah && formik.errors.nama_ayah ? (
                    <div>{formik.errors.nama_ayah}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="nama_ibu">Nama Ibu</label>
                <input
                    id="nama_ibu"
                    name="nama_ibu"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nama_ibu}
                />
                {formik.touched.nama_ibu && formik.errors.nama_ibu ? (
                    <div>{formik.errors.nama_ibu}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="pekerjaan_ayah">Pekerjaan Ayah</label>
                <input
                    id="pekerjaan_ayah"
                    name="pekerjaan_ayah"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pekerjaan_ayah}
                />
                {formik.touched.pekerjaan_ayah && formik.errors.pekerjaan_ayah ? (
                    <div>{formik.errors.pekerjaan_ayah}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="pekerjaan_ibu">Pekerjaan Ibu</label>
                <input
                    id="pekerjaan_ibu"
                    name="pekerjaan_ibu"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pekerjaan_ibu}
                />
                {formik.touched.pekerjaan_ibu && formik.errors.pekerjaan_ibu ? (
                    <div>{formik.errors.pekerjaan_ibu}</div>
                ) : null}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
export default SiswaCreate;