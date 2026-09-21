# NEXA

Produto Lovable-first: você diz o que precisa e a NEXA encontra quem pode resolver.

## Stack
React + TypeScript + Vite + Supabase + integração Google Maps configurável no Lovable + Stripe via Supabase Edge Functions.

## Integrações reais
- Google Maps: preparado para usar a integração Google Maps disponibilizada/configurada no Lovable. Chaves ficam em secrets/variáveis de ambiente.
- Pagamentos: Stripe Checkout com assinatura, 7 dias de teste e webhook para atualizar o estado da assinatura.
- Banco/autenticação: Supabase.
- Disponibilidade: nunca é declarada como confirmada sem dado real.

## Planos
Essencial: R$ 19,90/mês ou R$ 199/ano.
Profissional: R$ 39,90/mês ou R$ 399/ano.
Premium: R$ 69,90/mês ou R$ 699/ano.

## Configuração no Lovable
1. Sincronize este branch no Lovable.
2. Conecte o Supabase.
3. Aplique supabase/migrations/001_nexa.sql.
4. Ative/configure a integração Google Maps do Lovable.
5. Configure Stripe e os Price IDs dos planos.
6. Configure os secrets das Edge Functions: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_ESSENCIAL, STRIPE_PRICE_PROFISSIONAL, STRIPE_PRICE_PREMIUM e APP_URL.
7. Configure o webhook Stripe para /functions/v1/stripe-webhook.

Nunca colocar chave secreta no frontend.