games = [[1, 22, 26 ,34, 43, 53],

         [6, 15, 18, 31, 44, 56],

         [10, 20, 30, 40, 50, 60],

         [7, 10, 23, 39, 44, 57],

         [3, 11, 21, 32, 46, 60],

         [5, 10, 33, 37, 42, 53],

         [1, 13, 22, 49, 58, 60],

         [10, 11, 17, 22, 30, 42],

         [1, 11, 34, 47, 53, 58],

         [19, 32, 35, 49, 57, 60],

         [22, 27, 30, 41, 42, 47],

         [3, 10, 12, 24, 31, 56],

         [11, 13, 21, 43, 46, 54],

         [1, 12, 16, 18, 35, 48],

         [17, 18, 30, 37, 40, 46],

         [9, 20, 36, 40, 42, 44],

         [9, 15, 22, 25, 28, 32],

         [8, 17, 29, 32, 33, 40],

         [11, 16, 31, 32, 53, 56],

         [10, 21, 24, 27, 43, 52],

         [9, 10, 26, 31, 40, 60],

         [21, 22, 25, 32, 49, 57],

         [9, 43, 46, 52, 57, 60],

         [7, 8, 13, 31, 38, 42],

         [2, 8, 26, 28, 36, 47],

         [7, 12, 16, 30, 32, 60]]

prize = [3, 10, 12, 24, 31, 56] # coloque os números sorteados aqui

try:
    print(f'Parabéns você ganhou, a aposta sorteada foi a {games.index(prize) + 1}')
except ValueError :
    print('Não foi dessa vez :(')