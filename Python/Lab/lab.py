errorStatus = {}
run = True
while run:
    trys = 0
    valid_op = ['y'.casefold(), 'n'.casefold(),'yes'.casefold(), 'no'.casefold()]
    regularMessage = 'Error'
    l = [1, 2, 3]
    try:
        print(l[3])
    except Exception as error:
        print(errorStatus.get(str(error.args[0])))
        if errorStatus.get(str(error.args[0])) is None:
            err = error
            print(f'No status added to the current error \n {str(error)} \n')
            q = input('Add new custom message? [Y]/[N]').strip()
            while q not in valid_op:
                if trys == 4:
                    exit()
                else:
                    trys += 1
                print(
                    f'Invalid option, program will be aborted on {5 - trys} trys')
                q = input('Add new custom message? [Y]/[N]').strip()
            if q == 'y'.casefold() or q == 'yes'.casefold():
                customMessage = input('Message: ').strip()
                errorStatus[error.args[0]] = customMessage
            else:
                errorStatus[error.args[0]] = regularMessage
    trys = 0
    qq = input('Run again? [Y]/[N]')
    while qq not in valid_op:
        if trys == 4:
            exit()
        else:
            trys += 1
        print(f'Invalid option, program will be aborted on {5 - trys} trys')
        qq = input('Run again? [Y]/[N]')
    if qq == 'y'.casefold() or qq == 'yes'.casefold():
        continue
    else:
        run = False