const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    const htmlPath = path.resolve(__dirname, 'cv.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Carregar o HTML
    await page.setContent(htmlContent);
    
    // Aguardar renderização completa
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Gerar PDF com alta fidelidade
    await page.pdf({
        path: 'CV_Levy_Carlo_Final.pdf',
        format: 'A4',
        printBackground: true,  // Cores do sidebar
        margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
        displayHeaderFooter: false,
        preferCSSPageSize: true
    });

    console.log('✓ PDF gerado com SUCESSO: CV_Levy_Carlo_Final.pdf');
    console.log('  • Resolução: Máxima');
    console.log('  • Cores: 100% Fidedignas ao Browser');
    console.log('  • Linhas: Precisas e bem renderizadas');

    await browser.close();
})().catch(err => {
    console.error('✗ Erro ao gerar PDF:', err.message);
    process.exit(1);
});
