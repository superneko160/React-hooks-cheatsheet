'use server'

import { EmailResponse } from '../types/email';

export async function submitEmail(formData: FormData): Promise<EmailResponse> {
  try {
    const email = formData.get('email');
    if (!email || typeof email !== 'string') {
      throw new Error('メールアドレスは必須です');
    }

    // 実際の送信処理にかかる時間をシュミレーションするため2秒遅延させる
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      success: true,
      message: '送信が完了しました'
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : '送信エラーが発生しました'
    };
  }
}
