const express = require("express");
const app = express();
const port = 8000;

const { data, add, hapus, rename, get, addData, editData, hapusData } = require("./data");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//http://localhost:8000/data
app.get("/data", (req, res) => {
  res.send(data());
});
//http://localhost:8000/data/data(namafile)
app.get("/data/:nama_file", (req, res) => {
  res.send(get(req.params.nama_file));
});
//http://localhost:8000/add/(namafile)
app.get("/add/:nama_file", (req, res) => {
  res.send(add(req.params.nama_file));
});
//http://localhost:8000/data/data(namafile)/add?nama=faris
app.get("/data/:nama_file/add", (req, res) => {
  res.send(addData(req.params.nama_file, req.query));
})
//http://localhost:8000/delete/(namafile)
app.get("/delete/:nama_file", (req, res) => {
  res.send(hapus(req.params.nama_file));
});
//http://localhost:8000/data/data(namafile)/delete/nama
app.get("/data/:nama_file/delete/:id", (req, res) => {
  res.send(hapusData(req.params.nama_file, req.params.id));
})
//http://localhost:8000/rename?old=data2(filename)&new=data3(newfilename)
app.get("/rename", (req, res) => {
  res.send(rename(req.query.old, req.query.new));
});
//http://localhost:8000/data/data(namefile)/edit/nama?value=nur
app.get("/data/:nama_file/edit/:id", (req, res) => {
    res.send(editData(req.params.nama_file, req.params.id, req.query.value));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
