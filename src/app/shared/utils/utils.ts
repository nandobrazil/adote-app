export class UtilHelper {

    static format(value: string, type: string) {
        try {
            if (value) {

                if (type === 'cnpj' && value.length === 14) {
                    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '\$1.\$2.\$3\/\$4\-\$5');
                }
                if (type === 'cpf' && value.length === 11) {
                    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
                }
                if (type === 'phone') {
                    if (value.length === 11) {
                        return value.replace(/(\d{2})(\d{5})(\d{4})/g, '(\$1) \$2-\$3');
                    } else {
                        return value.replace(/(\d{2})(\d{4})(\d{4})/g, '(\$1) \$2-\$3');
                    }
                }
                if (type === 'cep') {
                    return value.replace(/(\d{5})(\d{3})/g, '\$1-\$2');
                }
            }
        } catch (error) {
            return value;
        }

    }

    static getOnlyNumber(value: string) {
        try {
            return value.replace(/\D/g, '');
        } catch (error) {
            return value;
        }
    }

    static removeMask(value: string) {
        try {
            return value.replace(/\.|\-|\//g, '');
        } catch (error) {
            return value;
        }
    }

    static removeMaskPhone(value: string) {
        try {
            return value.replace(/\(|\-|\)|\ /g, '');
        } catch (error) {
            return value;
        }
    }

    static formatDate(value: string) {
        try {
            const s = value.split('/');
            return `${s[2]}-${s[1]}-${s[0]}`;
        } catch (error) {
            return '';
        }
    }

}

