# Guia de Imagens - Tasty Cuisine

## Estrutura de Pastas

As imagens foram organizadas nas seguintes pastas:

```
images/
├── receitas/          # Imagens das receitas
├── ingredientes/      # Imagens dos ingredientes
├── hero/             # Imagens para seção hero
└── sobre/            # Imagens para página sobre
```

## Imagens Necessárias

### Receitas (images/receitas/)
- `bolo-chocolate-fit.jpg` - Bolo de Chocolate Fit
- `brownie-fit.jpg` - Brownie Fit Zero Açúcar
- `smoothie-bowl.jpg` - Smoothie Bowl Tropical
- `panquecas-aveia.jpg` - Panquecas de Aveia
- `suco-verde.jpg` - Suco Verde Detox
- `omelete-fit.jpg` - Omelete Fit
- `salmao-legumes.jpg` - Salmão Assado com Legumes
- `lasanha-abobrinha.jpg` - Lasanha de Abobrinha Vegana
- `sopa-lentilha.jpg` - Sopa de Lentilha Nutritiva
- `smoothie-verde.jpg` - Smoothie Verde Energético
- `cookies-integrais.jpg` - Cookies Integrais
- `frango-batata-doce.jpg` - Frango com Batata Doce
- `salada-frango.jpg` - Salada de Frango Grelhado
- `mousse-chocolate.jpg` - Mousse de Chocolate Fit
- `sorvete-banana.jpg` - Sorvete de Banana Fit
- `pudim-chia.jpg` - Pudim de Chia Zero Açúcar
- `curry-grao-bico.jpg` - Curry de Grão de Bico

### Ingredientes (images/ingredientes/)
- `aveia.jpg` - Aveia
- `chia.jpg` - Chia
- `banana.jpg` - Banana
- `castanhas.jpg` - Castanhas
- `cacau.jpg` - Cacau
- `linhaca.jpg` - Linhaça

### Hero (images/hero/)
- `hero-background.jpg` - Imagem de fundo da seção hero

### Perfil (images/perfil/)
- `avatar-usuario.jpg` - Foto de perfil do usuário

### Sobre (images/sobre/)
- `logo-coracao.png` - Logo com coração da Tasty Cuisine

## Especificações Técnicas

### Receitas
- **Formato:** JPG ou PNG
- **Dimensões recomendadas:** 400x300px (4:3)
- **Tamanho máximo:** 500KB
- **Qualidade:** Alta resolução, bem iluminadas

### Ingredientes
- **Formato:** JPG ou PNG
- **Dimensões recomendadas:** 200x200px (1:1)
- **Tamanho máximo:** 200KB
- **Estilo:** Fundo limpo, ingrediente centralizado

### Logo
- **Formato:** PNG (com transparência)
- **Dimensões recomendadas:** 300x300px
- **Tamanho máximo:** 100KB

## Como Adicionar Novas Imagens

1. Coloque a imagem na pasta correspondente
2. Use nomes descritivos e sem espaços (use hífens)
3. Mantenha a consistência no formato e qualidade
4. Teste a visualização em diferentes dispositivos

## Fallback

Caso uma imagem não seja encontrada, o CSS aplicará um gradiente colorido como placeholder, mantendo o layout funcional.

## Otimização

Para melhor performance:
- Comprima as imagens antes de usar
- Use formatos modernos como WebP quando possível
- Considere lazy loading para muitas imagens