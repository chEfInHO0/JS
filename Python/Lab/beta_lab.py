"""print(errorStatus.get(str(error.args[0])))
        if errorStatus.get(str(error.args[0])) is None:
            err = error
            print(f'No status added to the current error \n {str(error)} \n')
            q = input('Add new custom message? [Y]/[N]').strip()[0]
            while q not in valid_op:
                print('Invalid option, try again')
                q = input('Add new custom message? [Y]/[N]').strip()[0]
            if q == 'y'.casefold():
                customMessage = input('Message: ').strip()
                errorStatus[error.args[0]] = customMessage
            else:
                errorStatus[error.args[0]] = regularMessage
    qq = input('Run again? [Y]/[N]')
    while qq not in valid_op:
        print('Invalid option, try again')
        qq = input('Run again? [Y]/[N]')
    if qq == 'y'.casefold():
        print(errorStatus)
"""