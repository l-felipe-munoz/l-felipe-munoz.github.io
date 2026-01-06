# Felipe Muñoz — GitHub Pages (Jekyll)

Este repositorio contiene el código del sitio publicado en GitHub Pages: `https://l-felipe-munoz.github.io/`.

## Ver el sitio en local (Jekyll)

### Requisitos

- **Ruby** (recomendado: Ruby 3.x)
- **Bundler**

> Nota: el Ruby “del sistema” en macOS suele ser viejo (por ejemplo Ruby 2.6) y puede fallar con `github-pages`.
> Para evitar problemas, usa `rbenv` o `asdf` e instala Ruby 3.x.

Este repo incluye un `.ruby-version` para ayudarte a usar un Ruby moderno por proyecto.

### Setup recomendado con rbenv (macOS)

1) Instala `rbenv`:

```bash
brew install rbenv ruby-build
```

2) Activa `rbenv` en zsh (agrega esto a tu `~/.zshrc`):

```bash
eval "$(rbenv init - zsh)"
```

3) **Cierra y abre una nueva terminal** (o recarga `source ~/.zshrc`) y valida:

```bash
command -v rbenv
```

4) Entra al repo e instala la versión indicada por `.ruby-version`:

```bash
cd /Users/felipe/Documents/PERSONAL/l-felipe-munoz.github.io
rbenv install -s
rbenv rehash
ruby -v
```

5) Instala Bundler (ya usando Ruby 3.x):

```bash
gem install bundler
```

### Levantar el sitio

Desde la raíz del repo:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Luego abre:

- `http://127.0.0.1:4000/`

### Troubleshooting rápido

- Si ves este error:
  `You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.`

  Estás usando el **Ruby del sistema** (macOS). Soluciones:

  - Opción recomendada: instala Ruby 3.x con `rbenv` o `asdf` y vuelve a correr `bundle install`.
  - Opción rápida (no ideal): instala gems en tu usuario:

```bash
gem install bundler --user-install
```

- Si Bundler se queja por versiones, prueba:

```bash
bundle update github-pages
```

- Si aparece algo como `ffi ... requires ruby version >= 3.0`:
  aún estás en Ruby 2.6. Valida con:

```bash
which ruby
ruby -v
```

