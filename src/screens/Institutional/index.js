'use client';

import { institutionalNavigation } from './content';
import * as S from './styles';

export function InstitutionalScreen({ page }) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Hero>
          <S.Eyebrow>{page.eyebrow}</S.Eyebrow>
          <S.Title>{page.title}</S.Title>
          <S.Description>{page.description}</S.Description>
          <S.Nav aria-label="Navegacao institucional">
            {institutionalNavigation.map((item) => (
              <S.NavLink key={item.href} href={item.href} $active={item.href === page.slug}>
                {item.label}
              </S.NavLink>
            ))}
          </S.Nav>
        </S.Hero>

        <S.ContentGrid>
          <S.Aside>
            <S.AsideLabel>Transparencia</S.AsideLabel>
            <S.AsideText>
              Conteudo editorial, aviso de afiliacao e informacoes legais reunidos em paginas
              publicas e acessiveis pelo rodape.
            </S.AsideText>
          </S.Aside>

          <S.Sections>
            <S.Intro>{page.intro}</S.Intro>
            {page.sections.map((section) => (
              <S.Section key={section.title}>
                <S.SectionTitle>{section.title}</S.SectionTitle>
                {section.body.map((paragraph) => (
                  <S.Paragraph key={paragraph}>{paragraph}</S.Paragraph>
                ))}
              </S.Section>
            ))}
          </S.Sections>
        </S.ContentGrid>
      </S.Inner>
    </S.Wrapper>
  );
}
