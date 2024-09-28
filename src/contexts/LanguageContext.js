import React, { createContext, useContext } from 'react';

// Create a Context for the language
const LanguageContext = createContext();

// Example translations
const translations = {
    en: {
        discard: 'Discard',
        facebook: 'Facebook',
        quick_links: 'Quick Links',
        community: 'Community',
        goias: 'Goias',
        support: 'Support',
        pay_attention: 'Pay Attention',
        update: 'Update',
        patch_notes: 'Patch Notes',
        case: 'Case',
        event_summary: 'Event Summary',
        pc_or_laptop: 'PC or Laptop',
        pc_description: 'Now you can enjoy the nostalgic Pokémon game on your PC or Laptop.',
        feature: 'Feature',
        catch_them_all: 'Catch them all',
        pokemon_description: 'From Pikachu to Mewtwo, catch them all. Start your journey now.',
        stay_connected: 'Stay Connected',
        disclaimer: 'Pokémon and all respective names are trademarks of Nintendo.',
        social_icon: 'Social Icon',
        notice_image: 'Notice Image',
        community_icon: 'Community Icon',
        goias_icon: 'Goias Icon',
        support_icon: 'Support Icon',
    },
    he: {
        discard: 'לְבַטֵל',
        facebook: 'פייסבוק',
        quick_links: 'קישורים מהירים',
        community: 'קהילה',
        goias: 'גויאס',
        support: 'תמיכה',
        pay_attention: 'שם לב',
        update: 'עדכון',
        patch_notes: 'הערות תיקון',
        case: 'מִקרֶה',
        event_summary: 'סיכום אירוע',
        pc_or_laptop: 'מחשב או נייד',
        pc_description: 'עכשיו אתה יכול לשחק במשחק הפוקימוני הנוסטלגי במחשב האישי או הנייד שלך.',
        feature: 'תכונה',
        catch_them_all: 'לתפוס אותם כולם',
        pokemon_description: 'מ-Pikachu ל-Mewtwo תפסו את כולם. התחל את המסע שלך עכשיו.',
        stay_connected: 'תשאר מחובר',
        disclaimer: 'פוקימון וכל השמות בהתאמה הם סימני מסחר של נינטנדו.',
        social_icon: 'סמל חברתי',
        notice_image: 'תמונה להודעה',
        community_icon: 'סמל קהילה',
        goias_icon: 'סמל גויאס',
        support_icon: 'סמל תמיכה',
    },
};

// LanguageProvider component to wrap around the app
export const LanguageProvider = ({ children, language }) => {
    return (
        <LanguageContext.Provider value={translations[language]}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook to use the language context
export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return (key) => context[key] || key; // Fallback to key if translation is not found
};