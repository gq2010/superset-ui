import { t } from '@superset-ui/translation';

/**
 * formerly called integer()
 * @param v
 */
export default function legacyValidateInteger(v: unknown) {
  if (v && (isNaN(v as number) || parseInt(v as string, 10) !== Number(v))) {
    return t('is expected to be an integer');
  }
  return false;
}
