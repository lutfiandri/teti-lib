<h1 align="center">
  TETI LIB
</h1>

<p align="center">Rest API Peminjaman Buku | Kuliah Pengembangan Aplikasi Web</p><br>

## Related Repository

- Frontend Repo: [https://github.com/lutfiandri/teti-lib-frontend](https://github.com/lutfiandri/teti-lib-frontend)
- Backend Repo: [https://github.com/lutfiandri/teti-lib](https://github.com/lutfiandri/teti-lib) (current)

## Links

- Slide Presentasi (UTS): [Click Here](https://docs.google.com/presentation/d/11VY7UUr_BRWChc6mfLjOeOIf3Z26-PW4ceO8A2Kb4oI)
- Video Presentasi (UTS): [Click Here](https://s.id/pawPresentasiKelompok2)
- Slide Presentasi (Akhir): [Click Here](https://www.canva.com/design/DAFSQCxxR6Q/3yai7zDDPaF2WBaAPU3OfA/view?utm_content=DAFSQCxxR6Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1)
- Front End: https://teti-library.vercel.app/
- Back End: https://teti-lib.vercel.app/
- Postman Docs: [Click Here](https://documenter.getpostman.com/view/23529898/2s8YzS1iXv)

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
    │   ├──routes/
    │   ├──controllers/
    │   ├──models/
    │   ├──middlewares/
    │   └──helpers/
    ├── index.js
    └── package.json
```

### Explanation

1. package.json

   Berisi informasi, dependency, dan npm scripts dari project ini.

1. index.js

   Berisi inisialisasi server.

1. src/routes/

   Berisi endpoint dan terkoneksi dengan controller.

1. src/controllers/

   Berisi controller dan terkoneksi dengan service. Semua logic dari aplikasi harus berada pada controller.

1. src/models/

   Berisi model dan schema dari tiap-tiap entity.

1. src/middlewares/

   Berisi express middleware.

1. src/helpers/

   Berisi helper functions.

## 🗒️ Contribution Guide

### Branch Name

```
<type>/<short_description>

# contoh
feature/get-all-books
```

`<type>` :

- `feature`: saya menambahkan fitur baru
- `fix`: saya memperbaiki fitur

[Learn More](https://nvie.com/posts/a-successful-git-branching-model/)

### Commit Message (Git Conventional Commits)

```
<type>(scope): <short_summary>

# contoh
feat(books): get all books service
fix(books): missing variable
```

[Learn More](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
