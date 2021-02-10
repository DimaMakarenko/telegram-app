export type ExcludeNullInFields<F> = {
  [K in keyof F]: Exclude<F[K], null>;
};

export type FormRequiredFieldsNames<F> = {
  [K in keyof F]-?: Extract<F[K], undefined> extends never ? K : never;
}[keyof F];

export type FormRequiredFields<F> = ExcludeNullInFields<Pick<F, FormRequiredFieldsNames<F>>>;

export type GetFormValuesTypeOnSubmit<F> = F & FormRequiredFields<F>;
