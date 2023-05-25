import passport, { Strategy } from 'passport';

type TypeStrategy<T, U, X> = { new (params: U, Callback: X): T };

export function PassaportUse<T extends Strategy, U, X>(
  name: string,
  Strategy: TypeStrategy<T, U, X>,
  params: U,
  callback: X,
) {
  passport.use(name, new Strategy(params, callback));
}
