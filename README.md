# Automasi Pengujian Selenium untuk Halaman Login https://dev.to/enter

Repositori ini berisi pengujian automasi untuk memvalidasi fungsionalitas login pada aplikasi web menggunakan Selenium WebDriver, Mocha, dan JavaScript.

# DAFTAR ISI
* [Setup Projek](#setup-projek)
* [Struktur Folder](#struktur-folder)
* [Mengisi Environtment](#mengisi-environtment)
* [Menjalankan Pengujian](#menjalankan-pengujian)
* [Author](*author)

# Setup Projek
Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan pengujian automasi Selenium:
1. Kloning Repositori
Pertama, kloning repositori ke tempat penyimpanan lokal Anda:
```bash
git clone https://github.com/articnine99/Test-Automation.git
cd Test-Automation
```
2. Instal Dependensi
Instal semua dependensi yang diperlukan (Selenium WebDriver, Mocha, dotenv) dengan
menjalankan perintah berikut:
```bash
npm install selenium-webdriver dotenv
npm install -g mocha
```
3. Verifikasi Instalasi
Verifikasi bahwa semua dependensi terinstal dengan benar dengan menjalankan:
```bash
npm list
```
Pastikan semua dependensi sudah ada pada list.

# Struktur Folder
Berikut adalah struktur folder untuk projek ini:
```bash
.
├── driver
│   └── WebDriver.js
├── pages
│   └── BasePage.js
│   └── LoginPage.js
│   └── HomePage.js
├── screenshots
│   └── ...png
├── screenshots
│   ├── negative
│   └── login.test.js
│   ├── positive
│   └── login.test.js
└── .env.example
```
* /driver/WebDriver.js: Menyiapkan WebDriver untuk menjalankan pengujian di mode headless dan menangani
  pengambilan screenshot jika pengujian gagal.
* /pages/: Berisi objek halaman untuk berinteraksi dengan halaman login dan elemen lainnya (misalnya, LoginPage.js)
* /tests/: Berisi kasus pengujian menggunakan library Mocha untuk memvalidasi halaman login
* /screenshots/: Folder untuk tempat menyimpan hasil screenshot jika pengujian gagal.

# Mengisi Environtment
Isi environtment dan sesuaikan untuk bisa menjalankan pengujian dengan benar, 
contoh bisa lihat dibawah:
```bash
BROWSER = chrome
EMAIL = akbarsaputra1003@gmail.com
WRONG_EMAIL = akbarsaputra.com
INCORRECT_EMAIL = akbarsaputra@gmail.com
INCORRECT_PASSWORD = WRONG_PASSWORD
PASSWORD = secret_sauce
BASE_URL = https://dev.to/enter
SQL_QUERY = ' or 1=1 --
```
* Browser: Gunakan webdriver yang diinginkan misalnya (chrome, MicrosoftEdge, firefox)
* Email: Pastikan email benar dan sudah terdaftar
* Password: Isi dengan password yang benar
* Wrong Email: Bisa gunakan username atau apapun selama itu bukan email
* Incorrect Email: Isi dengan email yang belum terdaftar
* Incorrect Password: Isi dengan password yang salah
* Base Url: Isi dengan url "https://dev.to/enter"
* SQL Query: Isi dengan query untuk mencoba menginjeksi pada halaman login

# Menjalankan Pengujian
Jalankan pengujian
Untuk menjalankan pengujian, gunakan perintah berikut:
```bash
npm test
```
Perintah ini akan menjalankan pengujian yang ada didalam semua folder /tests/ dan 
menampilkan hasilnya di terminal.

# Author
Akbar Saputra
