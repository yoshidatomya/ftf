import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';

const services = [
    '外壁塗装工事',
    '屋根工事',
    '雨樋工事',
    '外構工事',
    '内装工事',
    '防水工事',
    '足場工事',
    'その他',
];

const propertyTypes = [
    '戸建て',
    'アパート',
    'マンション',
];

const ContactForm = () => {
    const { ref, isInView } = useInView({ threshold: 0.1 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        propertyType: '',
        service: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // FormSubmit.co integration
        try {
            const response = await fetch('https://formsubmit.co/ajax/kouyou1800@icloud.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `【お問い合わせ】${formData.name}様より - ${formData.service}`,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    propertyType: '',
                    service: '',
                    message: '',
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container-refined relative z-10" ref={ref}>
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-4 mb-10">
                        <span className="text-accent text-2xl font-serif">「</span>
                        <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
                            Contact
                        </span>
                        <span className="text-accent text-2xl font-serif">」</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">
                        お問い合わせ・<span className="text-gold-gradient">無料相談</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
                        <div className="w-3 h-3 rotate-45 border border-accent" />
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                    </div>

                    <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                        お見積り・ご相談は無料です。お気軽にお問い合わせください。
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Sidebar */}
                    <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <div className="space-y-8">
                            {/* Phone */}
                            <div className="group flex items-start gap-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:bg-card transition-all duration-500">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <Phone className="w-5 h-5 text-accent" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">お電話</h4>
                                    <a href="tel:080-3359-1800" className="text-2xl font-serif text-gold-gradient hover:opacity-80 transition-opacity">
                                        080-3359-1800
                                    </a>
                                    <p className="text-sm text-muted-foreground mt-1">受付時間: 9:00〜18:00</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group flex items-start gap-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:bg-card transition-all duration-500">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <Mail className="w-5 h-5 text-accent" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">メール</h4>
                                    <a href="mailto:kouyou1800@icloud.com" className="text-accent hover:opacity-80 transition-opacity break-all">
                                        kouyou1800@icloud.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="group flex items-start gap-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 hover:bg-card transition-all duration-500">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-accent" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">所在地</h4>
                                    <p className="text-muted-foreground">
                                        〒263-0003<br />
                                        千葉県千葉市稲毛区小深町535-2
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full p-12 rounded-xl border border-accent/30 bg-accent/5 text-center">
                                <CheckCircle className="w-16 h-16 text-accent mb-6" strokeWidth={1.5} />
                                <h3 className="text-2xl font-serif mb-4">送信完了</h3>
                                <p className="text-muted-foreground mb-6">
                                    お問い合わせありがとうございます。<br />
                                    担当者より折り返しご連絡いたします。
                                </p>
                                <Button
                                    onClick={() => setIsSubmitted(false)}
                                    variant="outline"
                                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                                >
                                    新しいお問い合わせ
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
                                {/* Name & Phone Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            お名前 <span className="text-accent">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                            placeholder="山田 太郎"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                            電話番号 <span className="text-accent">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                            placeholder="090-1234-5678"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        メールアドレス
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        placeholder="example@email.com"
                                    />
                                </div>

                                {/* Property Type & Service Row */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="propertyType" className="block text-sm font-medium mb-2">
                                            物件種類
                                        </label>
                                        <select
                                            id="propertyType"
                                            name="propertyType"
                                            value={formData.propertyType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        >
                                            <option value="">選択してください</option>
                                            {propertyTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                                            ご希望のサービス
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        >
                                            <option value="">選択してください</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        ご相談内容
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                                        placeholder="ご質問やご要望をご記入ください"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-6 text-base tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground btn-glow transition-all duration-500"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            送信中...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" strokeWidth={1.5} />
                                            無料相談を申し込む
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    ※ お問い合わせ内容は24時間以内にご返信いたします
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </section>
    );
};

export default ContactForm;
