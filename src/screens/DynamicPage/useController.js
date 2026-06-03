import { ArticleTemplate } from '@/templates/ArticleTemplate';
import { BuyingGuideTemplate } from '@/templates/BuyingGuideTemplate';
import { CategoryTemplate } from '@/templates/CategoryTemplate';
import { ComparisonTemplate } from '@/templates/ComparisonTemplate';
import { RankingTemplate } from '@/templates/RankingTemplate';

const templateByPageType = {
  ranking: RankingTemplate,
  article: ArticleTemplate,
  comparison: ComparisonTemplate,
  buyingGuide: BuyingGuideTemplate,
  categoryLanding: CategoryTemplate,
};

export function useController(page) {
  const Template = templateByPageType[page?.pageType] || ArticleTemplate;

  return {
    Template,
    page,
  };
}
