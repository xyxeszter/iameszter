import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { Space_Grotesk } from 'next/font/google';
import ReCAPTCHA from "react-google-recaptcha";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function NotchJP() {
  const [formStatus, setFormStatus] = useState('');
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const recaptchaValue = recaptchaRef.current.getValue();
      
      const response = await fetch("https://formspree.io/f/xrbpeqdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          message: e.target.message.value,
          'g-recaptcha-response': recaptchaValue,
          _subject: "New Notch JP Contact Form Submission",
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
        recaptchaRef.current.reset();
      } else {
        const data = await response.json();
        console.error('Form submission error:', data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-background-light text-black">
      <Footer />
      <div className="flex flex-col items-center justify-center text-center px-8 pt-16 pb-32">
        <div className="max-w-3xl text-left space-y-8">
          <div className="space-y-4">
            <h1 className={`text-4xl font-bold mb-8 ${spaceGrotesk.className}`}>
              Notch – パフォーマンス向けモーショントラッキング
            </h1>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                こんにちは！ (Hello!)
              </p>
              <p>
                私は東京に長く滞在することが多く、日本のスポーツテクノロジー・イノベーションコミュニティとつながることを楽しみにしています。私は <span className="font-bold">モーショントラッキング、AIを活用した動作分析、ウェアラブルテクノロジー</span> を専門とし、同じ志を持つ方々とのコラボレーションに興味があります。
              </p>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>Notchとは？</h2>
                <p>
                  私は <span className="font-bold">Notchの創業者兼CTO</span> であり、Notchは <span className="font-bold">モーショントラッキングを再定義するウェアラブルセンサー技術</span> を開発しています。Notchの <span className="font-bold">マルチセンサーシステム</span> は、<span className="font-bold">高精度な3Dモーションデータ</span> をキャプチャし、<span className="font-bold">リアルタイムAIによるフィードバック</span> を提供します。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>動作フォームとバイオメカニクスの分析</li>
                  <li>可動域と動作の質の測定</li>
                  <li>疲労や怪我のリスク評価</li>
                  <li>パフォーマンスの最適化</li>
                </ul>
                <p>
                  この技術は <span className="font-bold">フィットネス、リハビリ、ヘルスケア分野</span> において大きな影響を与えており、多くのプロフェッショナルから高い評価を受けています。
                </p>
              </div>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>実証されたテクノロジー</h2>
                <p>
                  Notchのセンサーは <span className="font-bold">150以上のモーションパラメータを分析</span> し、<span className="font-bold">フォーム追跡、疲労の洞察、リアルタイムコーチング</span> を提供します。
                </p>
                <p>
                  <span className="font-bold">80本以上の査読付き論文（Nature含む）で検証済み</span> であり、世界中の研究者がスポーツ科学、バイオメカニクス、リハビリ分野でNotchを活用しています。
                </p>
              </div>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>Notch Strength Lab – ストレングストレーニングのためのモーショントラッキング</h2>
                <div className="relative w-full pt-[56.25%] mb-8">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/bzu9WR8o0pU?si=kcfDfhSW632yk6Eb"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p>
                  現在、私たちは <span className="font-bold">ストレングストレーニングの分野にモーショントラッキングを導入</span> するため、Notch Strength Lab を開発しています。これにより、アスリートは以下のデータを取得できます。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>フォーム追跡と動作の効率性</li>
                  <li>主要リフトにおける可動域の測定</li>
                  <li>疲労モニタリングと動作の安定性分析</li>
                  <li>長期的なパフォーマンスのトレンド把握</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>日本市場での実績</h2>
                <div className="relative w-full pt-[56.25%] mb-8">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/PHITXVGzzyg?si=ztNz_Hj2olA9xhVQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p>
                  私たちは Sportstech Tokyo に参加し、<span className="font-bold">AIを活用したヨガモーショントラッキングソリューション Yoganotch</span> を発表しました。また、Innovation World Cup にも選出され、Notchは革新的なウェアラブルテクノロジーとして認識されています。
                </p>
              </div>

              <div className="space-y-4">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>コラボレーションにご興味がありますか？</h2>
                <p>
                  私は <span className="font-bold">日本の企業、スポーツテックスタートアップ、イノベーター</span> の皆様とつながり、モーショントラッキング、バイオメカニクス、パフォーマンス向上技術について議論できることを楽しみにしています。
                </p>
                <p>
                  Notchについて詳しくはこちら: <a href="https://wearnotch.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">wearnotch.com</a>
                </p>
              </div>

              <div className="space-y-6 mt-12">
                <h2 className={`text-2xl font-bold text-accent ${spaceGrotesk.className}`}>お問い合わせ</h2>
                <p className="text-lg">
                  Notchやモーショントラッキング技術についてのご質問やコラボレーションのご相談がございましたら、お気軽にご連絡ください。
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 mt-8"
                >
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      メールアドレス:
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      メッセージ:
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      theme="light"
                      onErrored={() => console.error('reCAPTCHA error:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)}
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="px-6 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'sending' ? '送信中...' : '送信'}
                    </button>
                  </div>

                  {formStatus === 'success' && (
                    <p className="text-green-600 text-center">
                      メッセージを送信しました。ご連絡ありがとうございます。
                    </p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-center">
                      申し訳ありません。メッセージの送信に失敗しました。もう一度お試しください。
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
