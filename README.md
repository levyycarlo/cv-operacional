# CV Operacional - Levy Carlo Portela Cerqueira

Currículo profissional interativo com geração de PDF em alta fidelidade.

## 📋 Características

- **Design Responsivo**: Interface moderna com Tailwind CSS
- **Fotografia Profissional**: Recorte e gerenciamento de imagem com CropperJS
- **PDF Programático**: Geração de PDF via jsPDF com paleta de cores otimizada
- **Modo Offline**: Totalmente funcional sem internet
- **100% Fiel**: PDF gerado é idêntico ao visualizado no navegador

## 🚀 Começar

### Pré-requisitos
- Node.js 14+
- Playwright (instalado automaticamente)

### Instalação

```bash
npm install
```

### Desenvolvimento

Abrir `cv.html` no navegador para editar e visualizar em tempo real.

### Gerar PDF

```bash
node generate-pdf.js
```

Será criado `CV_Levy_Carlo_Final.pdf` com alta qualidade.

## 📁 Estrutura

```
cv_operacional/
├── cv.html              # HTML/CSS/JS integrado
├── generate-pdf.js      # Script Playwright para PDF
├── package.json         # Dependências
└── README.md           # Este arquivo
```

## 🎨 Paleta de Cores

| Cor | Uso | RGB |
|-----|-----|-----|
| Primary | Sidebar, badges | 79, 109, 122 |
| Dark | Sidebar escuro | 61, 86, 97 |
| Accent | Destaques | 155, 193, 210 |
| Text | Textos principais | 44, 62, 80 |

## 🔧 Tecnologias

- **HTML5** - Estrutura
- **Tailwind CSS** - Estilo
- **Lucide Icons** - Ícones
- **jsPDF** - Geração PDF (navegador)
- **Playwright** - Renderização para PDF (Node.js)
- **CropperJS** - Edição de foto

## 📝 Recursos

- ✓ Editar fotografia profissional
- ✓ Gerar PDF com um clique
- ✓ Design limpo e moderno
- ✓ Totalmente responsivo
- ✓ Acessível e otimizado

## 💾 Dados

Todos os dados (foto, conteúdo) são armazenados localmente em `localStorage`.

## 📄 Licença

Projeto pessoal - Levy Carlo Portela Cerqueira

---

**Última atualização:** Abril 2026
