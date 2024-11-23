export default function validate(form) {

    const validator = new JustValidate(form)

    validator
        .addField("#title", [
          {
            rule: "required",
            errorMessage: "Поле обязательно нужно заполнить",
          },
        ])
        .addField("#place", [
          {
            rule: "required",
            errorMessage: "Поле обязательно нужно заполнить",
          },
        ])
        .addField("#weight", [
          {
            rule: "required",
            errorMessage: "Поле обязательно нужно заполнить",
          },
          {
            rule: "number",
            errorMessage: "В этом поле должны быть только цифры",
          },
          {
            rule: "minNumber",
            value: 0.01,
            errorMessage: "Укажите верный вес",
          },
        ])
        .addField("#date", [
          {
            rule: "required",
            errorMessage: "Поле обязательно нужно заполнить",
          },
        ]);

        return validator
}

