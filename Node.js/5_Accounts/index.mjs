import chalk from 'chalk'
import inquirer from 'inquirer'
import fs from 'fs'
const rootFolder = 'Accounts'

function greetings() {
    console.log(chalk.bgGreen.bold('Parabéns pela escolha do seu novo Banco'))
    console.log(chalk.green.bold('Agora siga as instruções a seguir'))
}
function createAccount() {
    console.log(chalk.bgYellow.black.bold('Digite -1 para voltar ao Menu Principal'))
    inquirer.prompt([
        { message: 'Nome do titular da conta: ', name: 'name' }
    ]).then((anwser) => {
        const user_name = anwser['name']
        const fileName = `${user_name}.json`
        const filePath = rootFolder + '/' + fileName
        const initialBalance = '{"balance":0}'
        if (user_name == -1) {
            operation()
        } else {
            if (!fs.existsSync(rootFolder)) {
                fs.mkdirSync(rootFolder)
            }
            if (fs.existsSync(filePath)) {
                console.log(chalk.bgRed.bold('Desculpe, já existe um titular com esse nome, tente outro'))
                createAccount()
            } else {
                fs.writeFileSync(filePath, initialBalance, (err) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                })
                console.log(chalk.bgGreen.bold('Conta criada com sucesso'))
                operation()
            }
        }

    }).catch((err) => {
        console.log(err)
    })
}
function checkBalance() {
    console.log(chalk.bgYellow.black.bold('Digite -1 para voltar ao Menu Principal'))
    inquirer.prompt([
        { message: 'Nome do titular da conta: ', name: 'name' }
    ]).then((anwser) => {
        const user_name = anwser['name']
        const fileName = `${user_name}.json`
        const filePath = rootFolder + '/' + fileName
        if (user_name == -1) {
            operation()
        } else {
            if (!fs.existsSync(filePath)) {
                console.log(chalk.bgRed.bold('Conta não localizada'))
                checkBalance()
            } else {
                fs.readFile(filePath, 'utf-8', (err, data) => {
                    if (err) {
                        console.log(err)
                        return
                    } else {
                        console.log(chalk.bgBlue.bold(`O saldo de sua conta é R$: ${JSON.parse(data).balance}`))
                        operation()
                    }
                })
            }
        }
    }).catch((err) => {
        if (err) {
            console.log(err)
            return
        }
    })
}
function deposit() {
    console.log(chalk.bgYellow.black.bold('Digite -1 para voltar ao Menu Principal'))
    inquirer.prompt(
        [{ message: 'Qual o nome do titular da conta? ', name: 'name' }
        ]).then((answer) => {
            const user_name = answer['name']
            const fileName = `${user_name}.json`
            const filePath = rootFolder + '/' + fileName
            if (user_name == -1) {
                operation()
            } else {
                if (!fs.existsSync(filePath)) {
                    console.log(chalk.bgRed.bold('Essa conta não existe'))
                    deposit()
                } else {
                    fs.readFile(filePath, 'utf-8', (err, data) => {
                        if (err) {
                            console.log(err)
                        } else {
                            inquirer.prompt([
                                { message: 'Quantia a ser depositada: ', name: 'value' }
                            ]).then((answer) => {
                                let oldBalance = JSON.parse(data)
                                let depositValue = answer['value']
                                if (!Number(depositValue)) {
                                    console.log(chalk.bgRed.bold('O valor depositado deve ser apenas numérico'))
                                    deposit()
                                } else {
                                    let newBalance = parseInt(oldBalance.balance) + parseInt(depositValue)
                                    oldBalance.balance = newBalance
                                    fs.writeFile(filePath, `${JSON.stringify(oldBalance)}`, (err) => {
                                        if (err) {
                                            console.log(err)
                                        }
                                    })
                                    console.log(chalk.bgGreen.bold('Deposito realizado com sucesso'))
                                    operation()
                                }
                            })
                        }
                    })
                }
            }
        }).catch((err) => {
            if (err) {
                console.log(err)
                return
            }
        })
}
function withdraw() {
    console.log(chalk.bgYellow.black.bold('Digite -1 para voltar ao Menu Principal'))
    inquirer.prompt([
        { message: 'Qual o nome do titular da conta? ', name: 'name' }
    ]).then((answer) => {
        const user_name = answer['name']
        const fileName = `${user_name}.json`
        const filePath = rootFolder + '/' + fileName
        if (user_name == -1) {
            operation()
        } else {
            if (!fs.existsSync(filePath)) {
                console.log(chalk.bgRed.bold('Essa conta não existe'))
                withdraw()
            } else {
                fs.readFile(filePath, 'utf-8', (err, data) => {
                    if (err) {
                        console.log(err)
                        return
                    } else {
                        inquirer.prompt([
                            { message: 'Valor a ser retirado: ', name: 'value' }
                        ]).then((answer) => {
                            const oldBalance = JSON.parse(data)
                            const withdrawValue = answer['value']
                            if (!Number(withdrawValue)) {
                                console.log(chalk.bgRed.bold('O valor deve ser apenas numérico'))
                                withdraw()
                            } else {
                                if (withdrawValue > oldBalance.balance) {
                                    console.log(chalk.bgRed.bold('O valor inserido não pode ser resgatado'))
                                    withdraw()
                                } else {
                                    const newBalance = parseInt(oldBalance.balance) - parseInt(withdrawValue)
                                    oldBalance.balance = newBalance
                                    fs.writeFile(filePath, JSON.stringify(oldBalance), (err) => {
                                        if (err) {
                                            console.log(err)
                                            return
                                        } else {
                                            console.log(chalk.bgGreen.bold('Saque efetuado com sucesso'))
                                            operation()
                                        }
                                    })
                                }
                            }
                        })
                    }
                })
            }
        }
    })
}
function leaveMessage() {
    console.log(chalk.bgCyan.bold('Obrigado por usar nosso aplicativo'))
    console.log(chalk.bgCyan('Volte logo'))
}
function operation() {
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'action',
                message: 'O que deseja fazer ?',
                choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
            }
        ]).then((anwser) => {
            const method = anwser['action']
            if (method == 'Criar Conta') {
                greetings()
                createAccount()
            } else if (method == 'Consultar Saldo') {
                checkBalance()
            } else if (method == 'Depositar') {
                deposit()
            } else if (method == 'Sacar') {
                withdraw()
            } else {
                leaveMessage()
            }
        }).catch((err) => {
            console.log(err)
        })
}
operation()