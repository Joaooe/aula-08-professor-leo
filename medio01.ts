def calcular_media(notas):
    if not notas:
        return 0  # Retorna 0 se o array estiver vazio para evitar divisão por zero
    soma = sum(notas)
    media = soma / len(notas)
    return media

# Exemplo de utilização
notas_aluno = [8.5, 7.2, 9.0, 6.8, 8.0]

media_notas = calcular_media(notas_aluno)

print(f'A média das notas é: {media_notas}')
