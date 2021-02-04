# Seu Barriga API

## Migrations
Ficam lozalizados na pasta:
```
src\migrations
```
### Executar todos os migrations
```
knex migrate:latest --env test
```

### Fazer rollbakc de todos os migrations
```
knex migrate:rollback --env test
```

### Criar migration
```
knex migrate:make create_users --env test
```
