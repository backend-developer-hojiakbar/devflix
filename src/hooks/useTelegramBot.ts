import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';

const BOT_TOKEN = '7978210591:AAEpCx7qCeaaCS3KjA4BNBaPGN2_qw00q7U';
const TARGET_USER_ID = '213806260';

export const useTelegramBot = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendApplication = async (formData: {
    name: string;
    phoneNumber: string;
    format: string;
    district: string;
  }) => {
    try {
      setIsLoading(true);
      setError('');
      
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      
      const message = `Yangi ariza:\nIsmi: ${formData.name}\nTelefon raqami: ${formData.phoneNumber}\nO'qish formati: ${formData.format}\nHududi: ${formData.district}\n\nMijozdan yaxshi xizmat qilish!`;
      
      const response = await axios.post(url, {
        chat_id: TARGET_USER_ID,
        text: message,
        parse_mode: 'HTML'
      });
      
      if (response.status === 200) {
        toast({
          title: "Ariza muvaffaqiyatli yuborildi",
          description: "Biz tez orada siz bilan bog'lanamiz!"
        });
        return true;
      } else {
        throw new Error('Telegram API xatoligi');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    sendApplication
  };
};