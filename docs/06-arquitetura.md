# Arquitetura NEXA
Frontend → REST API → Controllers → Validators → Services → Repositories → PostgreSQL.

Integrações externas devem usar adapters: AIProvider, MapsProvider, PaymentProvider e NotificationProvider.

Backend é autoridade para autenticação, autorização, assinatura, disponibilidade, ranking e respostas de estabelecimento.

Localização precisa é minimizada e não compartilhada com estabelecimentos por padrão. Se mapas/rotas falharem, não inventar ETA. Se IA falhar, usar busca textual.
