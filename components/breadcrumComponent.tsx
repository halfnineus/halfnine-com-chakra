import { Breadcrumb, BreadcrumbItem,  Text } from '@chakra-ui/react';
import Link from 'next/link';

interface BreadcrumbProps {
    pathname: string;
}

const BreadcrumbComponent = ({ pathname }: BreadcrumbProps) => {
    const paths = pathname.split('/').filter(Boolean);
    return (
        <Breadcrumb fontSize={'sm'} textColor="blackAlpha.700" letterSpacing={'tighter'}>
            <BreadcrumbItem>
                <Link href="/" passHref>
                    <Text _hover={{ color: 'blue.400' }}>Home</Text>
                </Link>
            </BreadcrumbItem>
            {paths.map((path, index) => {
                const displayText = path
                    .split('-')
                    .map((word) =>
                        word.length > 2
                            ? word[0].toUpperCase() + word.slice(1)
                            : word
                    )
                    .join(' ');
                const href = `/${paths.slice(0, index + 1).join('/')}`;
                return (
                    <BreadcrumbItem key={path} isCurrentPage={index === paths.length - 1}>
                        {index === paths.length - 1 ? (
                            <Text pointerEvents={'none'}>{displayText}</Text>
                        ) : (
                            <Link href={href} passHref>
                                <Text _hover={{ color: 'blue.400' }}>{displayText}</Text>
                            </Link>
                        )}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};

export default BreadcrumbComponent;