---
sidebar_position: 2
---

# Panduan Instalasi

Panduan lengkap untuk menginstal dan menjalankan Test Docosaurus di environment lokal Anda.

## Prasyarat Sistem

Sebelum memulai instalasi, pastikan sistem Anda memenuhi prasyarat berikut:

### Perangkat Lunak yang Dibutuhkan

- **Node.js** (versi 18.0 atau lebih tinggi)
- **npm** atau **yarn** sebagai package manager
- **Git** untuk version control
- **Text Editor** (VS Code, Sublime Text, dll.)

### Perangkat Keras Minimum

- **RAM**: 4GB (8GB direkomendasikan)
- **Storage**: 1GB ruang kosong
- **Processor**: Dual-core 2GHz atau setara
- **Koneksi Internet** untuk download dependencies

## Langkah Instalasi

### 1. Clone Repository

Pertama, clone repository dari GitHub:

```bash
git clone https://github.com/feggy-lime/test-docosaurus.git
cd test-docosaurus
```

### 2. Install Dependencies

Install semua dependencies yang diperlukan:

```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install
```

### 3. Konfigurasi Environment

Salin file konfigurasi default dan sesuaikan dengan kebutuhan:

```bash
# Tidak ada file .env yang diperlukan untuk setup dasar
# Docusaurus bekerja dengan konfigurasi default
```

### 4. Verifikasi Instalasi

Jalankan command berikut untuk memverifikasi instalasi:

```bash
npm run start
```

Jika berhasil, Anda akan melihat output seperti:

```
[SUCCESS] Docusaurus website is running at: http://localhost:3000/
```

## Menjalankan Development Server

### Start Development Server

```bash
npm run start
```

Server development akan berjalan di `http://localhost:3000` dengan fitur hot reload.

### Build untuk Production

```bash
npm run build
```

Command ini akan menghasilkan folder `build/` dengan file-file statis yang siap di-deploy.

### Serve Build Results

```bash
npm run serve
```

Command ini akan serve hasil build secara lokal untuk testing production build.

## Troubleshooting

### Error: Node.js Version

Jika Anda mendapat error terkait versi Node.js:

```bash
# Check versi Node.js saat ini
node --version

# Update ke versi terbaru jika diperlukan
# Atau gunakan nvm untuk management versi Node.js
```

### Error: Port Already in Use

Jika port 3000 sudah digunakan:

```bash
# Jalankan dengan port berbeda
npm run start -- --port 3001
```

### Error: Dependencies

Jika ada masalah dengan dependencies:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

### Error: Build Failures

Jika build gagal:

```bash
# Clear Docusaurus cache
npm run clear

# Build ulang
npm run build
```

## Konfigurasi IDE

### Visual Studio Code

Install extension yang direkomendasikan:

- **Markdown All in One** - untuk editing Markdown
- **MDX** - untuk syntax highlighting MDX
- **Prettier** - untuk code formatting
- **GitLens** - untuk Git integration

### Setting VS Code (Optional)

Buat file `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "markdown.preview.fontSize": 14,
  "files.associations": {
    "*.mdx": "mdx"
  }
}
```

## Deployment

### GitHub Pages

Untuk deploy ke GitHub Pages:

```bash
npm run deploy
```

### Netlify

1. Connect repository ke Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel

1. Import project ke Vercel
2. Vercel akan otomatis detect Docusaurus project
3. Deploy akan berjalan otomatis

---

:::tip Pro Tip

Gunakan `npm run start` saat development untuk melihat perubahan secara real-time. File akan otomatis reload ketika Anda menyimpan perubahan.

:::

:::warning Perhatian

Pastikan versi Node.js Anda minimal 18.0. Versi yang lebih lama mungkin menyebabkan error compatibility dengan Docusaurus v3.

:::

:::info Info Tambahan

Untuk customization lebih lanjut, edit file `docusaurus.config.js` dan `sidebars.js` sesuai kebutuhan proyek Anda.

:::