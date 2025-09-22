import type { CertificateInfoProps } from '../Certificate/types';

export function CertificateInfo({ 
  name, 
  issuer, 
  dateReceived, 
  expirationDate 
}: CertificateInfoProps) {
  const formatDate = (dateString: string) => {
    // Parse the date string and treat it as local date to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // month is 0-indexed in Date constructor
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
        {name}
      </h3>
      
      <p className="text-sm font-medium text-blue-600">
        {issuer}
      </p>
      
      <div className="flex flex-col space-y-1 text-sm text-gray-600">
        <p>
          <span className="font-medium">Received:</span> {formatDate(dateReceived)}
        </p>
        
        {expirationDate && (
          <p>
            <span className="font-medium">Expires:</span> {formatDate(expirationDate)}
          </p>
        )}
      </div>
    </div>
  );
}
