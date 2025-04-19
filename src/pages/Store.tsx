
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Store = () => {
  const handlePurchase = (item: string, price: number) => {
    const user = localStorage.getItem('fusion_user');
    if (!user) {
      toast.error('Please login to make purchases');
      return;
    }
    toast.success(`${item} added to cart! (Demo)`);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Server Store</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StoreItem
            title="VIP Rank"
            description="Get access to exclusive features and cosmetics"
            price={10}
            benefits={[
              "Colored name in chat",
              "Access to /fly command",
              "Extra plot space",
              "Special cosmetics"
            ]}
            onPurchase={() => handlePurchase("VIP Rank", 10)}
          />
          
          <StoreItem
            title="Elite Rank"
            description="Premium features for dedicated players"
            price={20}
            benefits={[
              "All VIP features",
              "Access to /nick command",
              "Multiple homes",
              "Premium cosmetics"
            ]}
            onPurchase={() => handlePurchase("Elite Rank", 20)}
          />
          
          <StoreItem
            title="Legend Rank"
            description="The ultimate server experience"
            price={30}
            benefits={[
              "All Elite features",
              "Custom join messages",
              "Unlimited homes",
              "Exclusive particle effects"
            ]}
            onPurchase={() => handlePurchase("Legend Rank", 30)}
          />
          
          <StoreItem
            title="Currency Pack - Small"
            description="Get in-game currency to spend"
            price={5}
            benefits={[
              "5,000 coins",
              "Bonus 500 coins",
              "Special money pouch",
            ]}
            onPurchase={() => handlePurchase("Small Currency Pack", 5)}
          />
          
          <StoreItem
            title="Currency Pack - Medium"
            description="More coins, better value"
            price={10}
            benefits={[
              "12,000 coins",
              "Bonus 2,000 coins",
              "Exclusive money pouch",
            ]}
            onPurchase={() => handlePurchase("Medium Currency Pack", 10)}
          />
          
          <StoreItem
            title="Currency Pack - Large"
            description="Best value for money"
            price={20}
            benefits={[
              "30,000 coins",
              "Bonus 8,000 coins",
              "Premium money pouch",
            ]}
            onPurchase={() => handlePurchase("Large Currency Pack", 20)}
          />
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>All purchases support the server and help us provide a better experience</p>
          <p className="text-sm mt-2">Prices in USD. No refunds available.</p>
        </div>
      </div>
    </MainLayout>
  );
};

interface StoreItemProps {
  title: string;
  description: string;
  price: number;
  benefits: string[];
  onPurchase: () => void;
}

const StoreItem = ({ title, description, price, benefits, onPurchase }: StoreItemProps) => {
  return (
    <Card className="minecraft-border hover:scale-105 transition-transform">
      <CardHeader>
        <CardTitle className="gradient-text">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <p className="text-2xl font-bold">${price}.00</p>
        <Button onClick={onPurchase} className="w-full gradient-bg">
          Purchase
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Store;
