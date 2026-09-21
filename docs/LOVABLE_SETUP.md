# NEXA no Lovable

1. Importe/sincronize este repositório no Lovable.
2. Conecte o Supabase pelo próprio Lovable e aplique a migration em supabase/migrations/001_nexa.sql.
3. Ative a integração Google Maps disponibilizada pelo Lovable. A chave deve permanecer em variável de ambiente/segredo, nunca no código.
4. Para pagamentos, configure Stripe no ambiente Supabase/Lovable e crie os Price IDs dos três planos: 19,90 / 39,90 / 69,90 por mês, com equivalentes anuais 199 / 399 / 699. O checkout usa 7 dias de teste.
5. Configure os secrets das Edge Functions: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_ESSENCIAL, STRIPE_PRICE_PROFISSIONAL, STRIPE_PRICE_PREMIUM e APP_URL.
6. Configure o webhook Stripe para /functions/v1/stripe-webhook.

Não colocar chaves secretas no frontend. Google Maps e pagamentos só devem ser considerados ativos depois de a integração real estar configurada e validada.