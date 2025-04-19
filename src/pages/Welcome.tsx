
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

const Welcome = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const t = translations[language].welcome;

  return (
    <div className="min-h-screen bg-gradient-to-b from-quiz-gray to-white flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={language === 'he' ? 'default' : 'outline'}
            onClick={() => setLanguage('he')}
            className="min-w-[100px]"
          >
            🇮🇱 {t.selectHebrew}
          </Button>
          <Button
            variant={language === 'en' ? 'default' : 'outline'}
            onClick={() => setLanguage('en')}
            className="min-w-[100px]"
          >
            🇺🇸 {t.selectEnglish}
          </Button>
        </div>

        <div className={`text-lg mb-8 whitespace-pre-line text-${language === 'he' ? 'right' : 'left'}`}>
          {t.description}
        </div>

        <Button
          onClick={() => navigate('/quiz')}
          size="lg"
          className="quiz-button border-0"
        >
          {t.startButton}
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
