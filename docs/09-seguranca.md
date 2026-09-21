# Segurança
Senhas: Argon2id. Access tokens: curta duração. Refresh tokens: revogáveis e armazenados no servidor somente em forma derivada/hash.

Nunca confiar em role enviado pelo frontend. Todo recurso protegido verifica identidade, papel e ownership. Business A não pode acessar recursos privados de Business B.

Nunca registrar senha, token, segredo, cartão completo ou localização exata desnecessária. Produção deve usar secret manager/variáveis protegidas.
