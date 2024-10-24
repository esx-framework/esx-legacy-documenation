import { useTranslation } from "src/hooks/useTranslation";

export function Footer() {
  const t = useTranslation();

  return (
    <span>
      <a href="https://www.esx-framework.org/" target="_blank">
        {t.copyright} {new Date().getFullYear()} ESX. {t.allRightsReserved}
      </a>
    </span>
  );
}
