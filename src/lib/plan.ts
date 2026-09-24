/** Porcentaje de inicial, igual para todos los clientes. */
export const DOWN_PAYMENT = 0.45;

export interface Plan {
  totalC: number;
  iniC: number;
  saldoC: number;
  cuotaC: number;
  /** La última cuota absorbe el redondeo. */
  lastC: number;
}

/** Calcula el plan en centavos para un precio en USD y `n` cuotas. */
export function plan(price: number, n: number): Plan {
  const totalC = Math.round(price * 100);
  const iniC = Math.round(totalC * DOWN_PAYMENT);
  const saldoC = totalC - iniC;
  const cuotaC = Math.round(saldoC / n);
  const lastC = saldoC - cuotaC * (n - 1);
  return { totalC, iniC, saldoC, cuotaC, lastC };
}

/** Formatea centavos como "1.234,56". */
export function money(cents: number): string {
  const [ent, dec] = (cents / 100).toFixed(2).split('.');
  return ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + dec;
}

export type Freq = 'semanal' | 'quincenal';

export const FREQS: { id: Freq; label: string; n: number; unit: string }[] = [
  { id: 'semanal', label: '4 pagos semanales', n: 4, unit: 'Semana' },
  { id: 'quincenal', label: '2 pagos quincenales', n: 2, unit: 'Quincena' },
];
