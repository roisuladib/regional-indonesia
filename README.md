
# API PUBLIK ALAMAT DI INDONESIA

Daftar API pencarian alamat di indonesia dengan data terbaru Kemendagri tahun 2022.


## Demo

https://alamat.cyclic.app/


## API Reference

#### Get all provincies

```http
  GET /provincies
```

#### Get regencies

```http
  GET /regencies/${province_code}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `province_code`      | `string` | **Required**. Kode privinsi|

#### Get districts

```http
  GET /districts/${regency_code}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `regency_code`      | `string` | **Required**. Kode Kota / Kab.|

#### Get villages

```http
  GET /villages/${district_code}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `district_code`      | `string` | **Required**. Kode kecamatan.|


## Authors

- [@roisuladib](https://github.com/roisuladib/regional-indonesia)
