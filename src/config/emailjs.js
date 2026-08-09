import emailjs from '@emailjs/browser';

/**
 * EmailJS Configuration Settings
 * Replace these placeholder values with your actual EmailJS credentials:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an Email Service (e.g. Gmail) -> get YOUR_SERVICE_ID
 * 3. Create an Email Template -> get YOUR_TEMPLATE_ID
 * 4. Go to Account -> Public Key -> get YOUR_PUBLIC_KEY
 */

export const EMAILJS_CONFIG = {
  // Replace with your real EmailJS values when ready
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
  RECIPIENT_EMAIL: 'gokulnath2006mg@gmail.com'
};

/**
 * Sends contact form email using EmailJS or interactive simulated send
 * @param {Object} formData { name, email, subject, message }
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const sendContactEmail = async (formData) => {
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

  // Check if user has configured real EmailJS keys
  const isConfigured = 
    SERVICE_ID && 
    SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    TEMPLATE_ID && 
    TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    PUBLIC_KEY && 
    PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

  if (isConfigured) {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact Message',
        message: formData.message,
        to_name: 'Gokulnath M',
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Your message has been sent successfully via EmailJS! Gokulnath will respond to you soon.'
        };
      } else {
        throw new Error(`EmailJS responded with status ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: error?.text || error?.message || 'Failed to send message via EmailJS. Please try again.'
      };
    }
  } else {
    // Simulated send for demo purpose when placeholder keys are present
    console.warn('EmailJS keys are placeholders. Simulating message dispatch to Gokulnath M...');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    return {
      success: true,
      isDemo: true,
      message: `Message simulated successfully! To send real emails directly to gokulnath2006mg@gmail.com, please configure your EmailJS credentials in src/config/emailjs.js.`
    };
  }
};
