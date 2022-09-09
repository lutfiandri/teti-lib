<h1 align="center">
  TETI LIB
</h1>

<p align="center">Rest API Peminjaman Buku | Kuliah Pengembangan Aplikasi Web</p><br>

## ⚡️ Development Setup

### Prerequisites

- [Download](https://nodejs.org/en/download/) and install **Node.js** version `16.15` or higher.
- [Download](https://classic.yarnpkg.com/lang/en/docs/install/) and install **yarn** version `1.22` or higher.
- Clone this project and open it using your favorite code editor.

### Setting Up Project

- Install required dependencies:

  ```bash
  yarn
  ```

- Run the program:

  ```bash
  # on development
  yarn dev

  # on production
  yarn start
  ```

## ⚙️ Project Structure

### Directory Tree

```
.
└── teti-lib/
    ├── src/
    │   ├──db/
    │   ├──routes/
    │   ├──controllers/
    │   └──services/
    ├── index.js
    └── package.json
```

### Explanation

1. package.json

   Berisi informasi, dependency, dan npm scripts dari project ini.

1. index.js

   Berisi inisialisasi server.

1. src/db/

   Berisi koneksi dari database.

1. src/routes/

   Berisi endpoint dan terkoneksi dengan controller.

1. src/controllers/

   Berisi controller dan terkoneksi dengan service. Semua logic dari aplikasi harus berada pada controller.

1. src/services/

   Berisi service yang bertugas untuk menghubungkan dengan database (atau aplikasi lain).
